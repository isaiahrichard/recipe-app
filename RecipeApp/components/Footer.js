import React, { useContext } from 'react'
import { View, Image, StyleSheet, TouchableHighlight} from 'react-native'
import { useRoute } from '@react-navigation/native';
import {PageInfo} from '../assets/footerInfo'
import { StateContext } from './Context/StateContext';

const Footer = ( {navigation} ) => {
  
    const route = useRoute()

    homeDark = require('../Images/Footer/HomeDark.png')
    homeLight = require('../Images/Footer/HomeLight.png')
    OptionsDark = require('../Images/Footer/OptionsDark.png')
    OptionsLight = require('../Images/Footer/OptionsLight.png')
    RecipesDark = require('../Images/Footer/RecipesDark.png')
    RecipesLight = require('../Images/Footer/RecipesLight.png')
    ProfileDark = require('../Images/Footer/ProfileDark.png')
    ProfileLight = require('../Images/Footer/ProfileLight.png')
    LoginLight = require('../Images/Settings.png')
    LoginDark = require('../Images/Footer/LoginDark.png')

    onHomePage = route.name == 'home'
    onOptionsPage = route.name == 'options'
    onRecipesPage = route.name == 'recipes'
    onProfilePage = route.name == 'profile'
    onLoginPage = route.name == 'login'

    const {usernameObj, passwordObj} = useContext(StateContext)
    const setUsername = usernameObj[1]
    const setPassword = passwordObj[1]

    const handlePress = (Page) => {
      if(Page.pageName == 'login'){
        setUsername("")
        setPassword("")
      }
      navigation.navigate(Page.pageName)
    }


  return (
    <View style={styles.FooterWrapper}> 
        {PageInfo.map((Page, index) => { 
           return <TouchableHighlight 
                    onPress={() => handlePress(Page)}
                    underlayColor={'transparent'} 
                    style={Page.styles}
                    key={index}
                  >
                      <View style={styles.IconContainer}> 
                        <Image source={Page.imgSrc} style={styles.FooterIcons} />
                      </View>
                  </TouchableHighlight>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    FooterIcons: {
        height: 30,
        width: 35,
        resizeMode: 'contain',
    },
    IconContainer: {
      padding: 20,
      alignItems: 'center'
    },
    FooterWrapper: {
        flexDirection: 'row',
        backgroundColor: '#FF6C6C',
        alignItems: 'center',
        maxHeight: 70,
        minHeight: 70
    }
  });

export default Footer