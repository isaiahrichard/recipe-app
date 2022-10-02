import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

import RecipeCard from './RecipeCard';

const RecipeCardContainer = ({title, data}) => {

  return (
    <View style={styles.RecipeContainer}> 
        <Text style={styles.ContainerTitle}>{title}</Text>
        {data.map((name, index) => <RecipeCard recipeName={name} key={index}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    RecipeContainer: {
        marginTop: 10,
        marginHorizontal: 16
    },
    ContainerTitle: {
        paddingBottom: 5,
        paddingLeft: 3,
        fontSize: 14,
        color: '#000',
        fontFamily: 'Poppins-Regular'
      }
  });

export default RecipeCardContainer