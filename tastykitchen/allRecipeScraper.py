from asyncio.windows_events import NULL
import requests
from bs4 import BeautifulSoup
import json
import pymongo
from pymongo import MongoClient
import math

cluster = MongoClient("mongodb+srv://isaiah:nadder3415@recipe-app.daa69.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["Recipes"]

#Access Header
hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',}

#URL List
URLS = ['https://www.allrecipes.com/recipes/76/appetizers-and-snacks/', 'https://www.allrecipes.com/recipes/156/bread/', 
'https://www.allrecipes.com/recipes/78/breakfast-and-brunch/', 'https://www.allrecipes.com/recipes/79/desserts/', 'https://www.allrecipes.com/recipes/17562/dinner/', 
'https://www.allrecipes.com/recipes/77/drinks/', 'https://www.allrecipes.com/recipes/1642/everyday-cooking/', 'https://www.allrecipes.com/recipes/1116/fruits-and-vegetables/', 
'https://www.allrecipes.com/recipes/84/healthy-recipes/', 'https://www.allrecipes.com/recipes/85/holidays-and-events/', 
'https://www.allrecipes.com/recipes/17561/lunch/', 'https://www.allrecipes.com/recipes/80/main-dish/', 'https://www.allrecipes.com/recipes/92/meat-and-poultry/', 
'https://www.allrecipes.com/recipes/95/pasta-and-noodles/', 'https://www.allrecipes.com/recipes/96/salad/', 'https://www.allrecipes.com/recipes/93/seafood/', 
'https://www.allrecipes.com/recipes/81/side-dish/', 'https://www.allrecipes.com/recipes/94/soups-stews-and-chili/', 'https://www.allrecipes.com/recipes/82/trusted-brands-recipes-and-tips/', 
'https://www.allrecipes.com/recipes/236/us-recipes/', 'https://www.allrecipes.com/recipes/86/world-cuisine/']


#Create Recipe template
def createRecipe():
    return {
    "title": "",
    "ingredients": [],
    "directions": [],
    "nutrition": {
        "calories": NULL,
        "protein": NULL,
        "carbohydrates": NULL,
        "fat": NULL,
        "cholesterol": NULL,
        "sodium": NULL,
    },
    "timeTitles": {
        "prep": NULL,
        "cook": NULL,
        "total": NULL,
        "Servings": NULL,
        "Yield": NULL,
    },
    "link": "",
    "imgLink": "",
    "avgRating":0,
}

#Turns array of strings into dictionary given a seperator for key and values
def listSplitter(unsplitList, seperator):       
    listKeys, listVals = map(list, zip(*(x.split(seperator) for x in unsplitList)))
    listKeys, listVals = [" ".join(val.split()) for val in listKeys], [" ".join(val.split()) for val in listVals]
    return dict(zip(listKeys, listVals))

def averageRatings(ratings):
    avgRating = 0
    currStar = 5
    for rating in ratings:
        avgRating += currStar*rating
        currStar -= 1
    return  (round(avgRating/(sum(ratings) or math.inf), 1) - 3.75)*math.log(sum(ratings)) + 1

#Scraping for each section
for url in URLS:
    currSection = url.split('/')[5]
    print(currSection)
    currCollection = db[currSection]
    nextURL = url
    while nextURL:
        #Get url for next page with recipes within a section
        page = requests.get(nextURL, headers=hdr)
        soup = BeautifulSoup(page.content, features="html.parser")
        #Gets list of recipe urls 
        recipeList = soup.select('div.card__detailsContainer-left a.manual-link-behavior.card__titleLink', href=True) or soup.select('div.tout__contentHeadline a.tout__titleLink.elementFont__toutLink', href=True)
        for recipe in recipeList:
            #creates of a copy of the recipe template
            currRecipe = createRecipe()

            #adds 'https://www.allrecipes.com' to the front of links 
            recipe['href'] = recipe['href'].replace('https://www.allrecipes.com', '')
            recipe['href'] = 'https://www.allrecipes.com' + recipe['href']
            recipeResp = requests.get(recipe['href'], headers=hdr)
            recipeSoup = BeautifulSoup(recipeResp.content, features="html.parser")

            #Scraping values from website
            ingredients = [ingredient.get_text() for ingredient in recipeSoup.select('ul.ingredients-section span.ingredients-item-name.elementFont__body')]
            if not ingredients:
                continue
            directions = [direction.get_text() for direction in recipeSoup.select('ul.instructions-section li.instructions-section-item p')]
            title = recipeSoup.select_one('div.intro.article-info div.headline-wrapper h1.headline.heading-content.elementFont__display').get_text()
            nutrition = [nutrition.get_text() for nutrition in recipeSoup.select('div.recipeNutritionSectionBlock div.section-body')]
            timeTitles = [times.get_text() for times in recipeSoup.select('div.two-subcol-content-wrapper div.recipe-meta-item')]
            imgLink = recipeSoup.select_one('aside.recipe-tout-image div.component.lazy-image') or recipeSoup.select_one('div.image-container div.component.lazy-image')
            ratings = averageRatings([int(rating.get_text()) for rating in recipeSoup.select('div.recipeRatingsList li.rating span.rating-count')])

            #Adding values to currentRecipe dictionary
            currRecipe['ingredients'] = ingredients
            currRecipe['directions'] = directions
            currRecipe['title'] = title
            currRecipe['link'] = recipe['href']
            currRecipe['avgRating'] = ratings
            if imgLink:
                currRecipe['imgLink'] = imgLink['data-src']

            #Checks if nutrition facts were pulled
            if nutrition:
                #Removes full nutrition from end of string
                nutritionList = (nutrition[0].split('. Full Nutrition')[0]).split(';')
                #Removes unnecessary spaces
                nutritionList = [" ".join(val.split()) for val in nutritionList]
                #Sets calories to key instead of value
                nutritionList[0] = ''.join(nutritionList[0].partition(' ')[::-1])
                #Updates the currentRecipe template with nutrition values
                currRecipe["nutrition"] = {key: listSplitter(nutritionList, ' ').get(key, currRecipe["nutrition"][key]) for key in currRecipe["nutrition"]}
            
            #Updates the currentRecipe template with time values
            currRecipe['timeTitles'] = {key: listSplitter(timeTitles, ':').get(key, currRecipe["timeTitles"][key]) for key in currRecipe["timeTitles"]}
            #Adds currentRecipe dictionary to currentRecipe arrays
            currCollection.insert_one(currRecipe)

        #Updates nextURL with url to next page with recipes
        nextURL = soup.find('a', href=True, class_='category-page-list-related-load-more-button') or soup.find('a', href=True, class_='categoryPage__relatedButton categoryPage__relatedButton--next')

        if nextURL:
            #Sets NEXTURL to an href
            nextURL = nextURL['href']


