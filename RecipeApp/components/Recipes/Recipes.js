import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from '../Header'
import SearchBarComp from '../SearchBarComp';
import Footer from '../Footer';
import Filters from './Filters';
import CheckBoxMsg from '../CheckBoxMsg';
import RecipeCardContainer from './RecipeCardContainer';
import TabBar from '../TabBar';


const Recipes = ( {navigation} ) => {

  const [ingredientTab, setIngredientTab] = useState(false);
  const canMake = ["Hamburger", "Steak", "Pasta"]
  const almostCanMake = ["Salmon", "Grilled Cheese", "Tomato Soup"]

  const titles = ["Available", "Missing Some"]

  return (
    <View style={{flex: 1}}>
      <ScrollView >
        <Header/>
        <TabBar ingredientTab={ingredientTab} setIngredientTab={setIngredientTab} titles={titles}/>
        <SearchBarComp />
        <CheckBoxMsg message="I only have       2 hours        to cook"/>
        {
          ingredientTab ? <RecipeCardContainer title="Recipes You're Missing a Few Ingredients From" data={almostCanMake}/>
          : <RecipeCardContainer title="Recipes You Can Make Right Now" data={canMake}/>
          
        }
      </ScrollView>
      <Footer navigation = {navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  CardTitle: {
    paddingBottom: 5,
    paddingLeft: 3,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  }
});

export default Recipes