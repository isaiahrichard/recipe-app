import React, {useState} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

const RecipeCard = ({recipeName}) => {

    const imgSrc = require('../../Images/Ingredients.png')

  return (
    <View style={styles.CardWrapper}>
        <Image
        source={imgSrc} 
        style={styles.CardImg}
        />
        <View style={[styles.CardTextWrapper]}>
            <Text style={styles.CardText}>{recipeName}</Text>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
    CardTextWrapper: {
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    CardText:{
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Poppins-Regular',
      borderRadius:7,
      backgroundColor: '#000',
      paddingHorizontal: 7,
      paddingVertical: 4
    },
    CardWrapper: {
        height: 62,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        width: '100%',
        marginTop: 7
    },
    CardImg: {
        width: '100%',
        height: 62,
        borderRadius: 10
    }
  });

export default RecipeCard