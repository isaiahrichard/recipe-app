import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Header from '../Header'
import SearchBarComp from '../Home/SearchBarComp';
import Footer from '../Footer';
import TabBar from './TabBar';
import OptionCard from './OptionCard';

import {applianceInfo, myApplianceInfo} from './AppliancesData'
import {commonIngredientsInfo, myIngredientsInfo} from './IngredientData'



const Options = ( {navigation} ) => {

  const [ingredientTab, setIngredientTab] = useState(false);
  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  return (
    <View style={{flex: 1}}>
    <ScrollView>
      <Header/>
      <TabBar ingredientTab={ingredientTab} setIngredientTab={setIngredientTab}/>
      <SearchBarComp />
      {
        ingredientTab ? 
        <View style={styles.CheckboxWrapper}>
          <CheckBox
          value={toggleCheckbox}
          onValueChange={(newValue) => setToggleCheckbox(newValue)}
          tintColors={{ true: '#FF6C6C'}}
          />
          <Text style={styles.CheckboxMsg}>Only show me recipes I can make</Text>
        </View> 
        : <View></View>
      }
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

const styles = StyleSheet.create({
  CheckboxWrapper: {  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },

  CheckboxMsg: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    paddingLeft: 10,
    paddingTop: 2
  }
})

export default Options