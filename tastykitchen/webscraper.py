from http import client
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup
from pymongo import MongoClient
from Links import linkList
import json


# Recipes A to Z page
startingUrl = 'https://www.foodnetwork.com/recipes/recipes-a-z/'
defaultImgLink = "food.fnr.sndimg.com/content/dam/images/food/editorial/homepage/fn-feature.jpg.rend.hgtvcom.826.620.suffix/1474463768097.jpeg"

cluster = MongoClient(
    "mongodb+srv://recipemons:LciribQdK8aZ437P@recipe-app.daa69.mongodb.net/?retryWrites=true&w=majority")
db = cluster["Recipe"]
collection = db["test"]

hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', }

req = Request(startingUrl, headers=hdr)
resp = urlopen(req)
pageHtml = resp.read()
resp.close()
pageSoup = soup(pageHtml, "html.parser")


# Grab all recipe links
recipes = pageSoup.findAll("li", {"class": "m-PromoList__a-ListItem"})

for recipe in recipes:
    # Click on Single Recipe Link
    currRecipe = {}
    currRecipe["name"] = recipe.a.text
    currRecipe["recipeLink"] = 'https:' + recipe.a["href"]
    print(currRecipe["recipeLink"])
    req2 = Request(currRecipe["recipeLink"], headers=hdr)
    resp2 = urlopen(req2)
    recipeHtml = resp2.read()
    resp2.close()
    recipeSoup = soup(recipeHtml, "html.parser")

    # Ingredients
    ingredientTags = recipeSoup.findAll(
        "span", {"class": "o-Ingredients__a-Ingredient--CheckboxLabel"})
    currRecipe["ingredients"] = []
    for ingredient in ingredientTags[1:]:
        currRecipe["ingredients"].append(ingredient.text)

    # Directions
    directionTags = recipeSoup.findAll("li", {"class": "o-Method__m-Step"})
    currRecipe["directions"] = []
    for direction in directionTags:
        currRecipe["directions"].append(direction.text.strip())

    # Time (includes total (index 0) and active (index 1))
    currRecipe["time"] = [time.text for time in recipeSoup.select(
        "ul.o-RecipeInfo__m-Time span.o-RecipeInfo__a-Description")]

    # Image Link
    image = recipeSoup.find("img", {"class": "m-MediaBlock__a-Image a-Image"})
    currRecipe["imageSrc"] = image["src"][2:] if image["src"][2:] != defaultImgLink else ""

    # recipeYield (Note: list contains two of the same serving numbers)
    currRecipe["recipeYield"] = [Yield.text for Yield in recipeSoup.select(
        "ul.o-RecipeInfo__m-Yield span.o-RecipeInfo__a-Description")][0]

    # Categories
    categoryTags = recipeSoup.select(
        "div.o-Capsule__m-TagList.m-TagList a.o-Capsule__a-Tag.a-Tag")
    currRecipe["categories"] = []
    for category in categoryTags:
        currRecipe["categories"].append(category.text)

    if not all(info for info in currRecipe.values()):
        continue

    collection.insert_one(currRecipe)
