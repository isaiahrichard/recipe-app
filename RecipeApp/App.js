import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header'
import SearchBarComp from './components/SearchBarComp';
import CardComp from './components/CardComp'
import Footer from './components/Footer';


const App = () => {

  return (
      <View style={styles.container}>
        <ScrollView>
          <Header/>
          <SearchBarComp />
          <CardComp title='Less Thinking, More Eating' imgSrc={require(`./Images/Ingredients.png`)}
          cardText='ENTER YOUR INGREDIENTS AND APPLIANCES'
          />
          <CardComp title='Need Ideas? Try A Featured Recipe' imgSrc={require(`./Images/Recipe1.png`)}
          cardText='Blueberry Breakfast Granola' extraStyles={{backgroundColor: '#F1EFF9', maxWidth: 300, padding: 2, color: '#000'}}
          />
        </ScrollView>
        <Footer />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});

export default App;