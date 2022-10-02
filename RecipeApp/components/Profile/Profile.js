import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../Header'
import SearchBarComp from '../SearchBarComp';
import CardComp from '../Home/CardComp'
import Footer from '../Footer';

const Profile = ( {navigation} ) => {
  return (
    <View style={{flex: 1}}>
    <ScrollView>
      <Header/>
      <SearchBarComp />
      <CardComp title='Profile' imgSrc={require(`../../Images/Ingredients.png`)}
      cardText='ENTER YOUR INGREDIENTS AND APPLIANCES'
      />
      <CardComp title='Profile' imgSrc={require(`../../Images/Recipe1.png`)}
      cardText='Blueberry Breakfast Granola' extraStyles={{backgroundColor: '#F1EFF9', maxWidth: 300, padding: 2, color: '#000'}}
      />
    </ScrollView>
    <Footer navigation = {navigation}/>
  </View>
  )
}

export default Profile