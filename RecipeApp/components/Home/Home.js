import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../Header'
import SearchBarComp from '../SearchBarComp';
import CardComp from './CardComp'
import Footer from '../Footer';

const HomePage = ( {navigation} ) => {
  return (
    <View style={{flex: 1}}>
    <ScrollView>
      <Header/>
      <SearchBarComp />
      <CardComp title='Less Thinking, More Eating' imgSrc={require(`../../Images/Ingredients.png`)}
      cardText='ENTER YOUR INGREDIENTS AND APPLIANCES'
      />
      <CardComp title='Need Ideas? Try A Featured Recipe' imgSrc={require(`../../Images/DummyRecipe.png`)}
      cardText='Blueberry Breakfast Granola' extraStyles={{backgroundColor: '#F1EFF9', maxWidth: 300, padding: 2, color: '#000'}}
      />
    </ScrollView>
    <Footer navigation = {navigation}/>
  </View>
  )
}

export default HomePage