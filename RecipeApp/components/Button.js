import React, {useState} from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Alert} from 'react-native';


const Button = ({text, navigation, validLogin, onButton}) => {

  const handleLogin = () => {
    if(validLogin){
      navigation.navigate('home')
    }
    else{
      Alert.alert(
        "Please enter username and password"
      );
    }
  }

  return (
    <TouchableHighlight onPress={onButton} underlayColor={'transparent'}>
      <View style={styles.ButtonWrapper}>
          <Text style={styles.InnerText}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        marginHorizontal: 55,
        backgroundColor: '#FF6C6C',
        borderRadius: 5,
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    InnerText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    }
  });

export default Button