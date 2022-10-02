import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import Header from '../Header'
import SearchBarComp from '../SearchBarComp';
import Footer from '../Footer';
import TabBar from '../TabBar';
import OptionCard from './OptionCard';

import {applianceInfo, myApplianceInfo} from '../../data/AppliancesData'
import {commonIngredientsInfo, myIngredientsInfo} from '../../data/IngredientData'



const Options = ( {navigation} ) => {

  const [ingredientTab, setIngredientTab] = useState(false);
  const titles= ["Appliances", "Ingredients"]

  return (
    <View style={{flex: 1}}>
    <ScrollView>
      <Header/>
      <TabBar ingredientTab={ingredientTab} setIngredientTab={setIngredientTab} titles={titles}/>
      <SearchBarComp />
      <OptionCard 
      buttonInfoArray={ingredientTab ? commonIngredientsInfo : applianceInfo} 
      title={ingredientTab ? "Common Ingredients" : "Common Appliances"}/>
      <OptionCard 
      buttonInfoArray={ingredientTab ? myIngredientsInfo : myApplianceInfo} 
      title={ingredientTab ? "Your Ingredients" : "Your Appliances"}/>
    </ScrollView>
    <Footer navigation = {navigation}/>
  </View>
  )
}

export default Options