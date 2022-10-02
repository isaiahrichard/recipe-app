import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight} from 'react-native'
import { useRoute } from '@react-navigation/native';

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

    onHomePage = route.name == 'home'
    onOptionsPage = route.name == 'options'
    onRecipesPage = route.name == 'recipes'
    onProfilePage = route.name == 'profile'

  const PageInfo = [
    {
      imgSrc: onHomePage ? homeLight : homeDark,
      pageName: 'home',
      styles: onHomePage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onOptionsPage ? OptionsLight : OptionsDark,
      pageName: 'options',
      styles: onOptionsPage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onRecipesPage ? RecipesLight : RecipesDark,
      pageName: 'recipes',
      styles: onRecipesPage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onProfilePage ? ProfileLight : ProfileDark,
      pageName: 'profile',
      styles: onProfilePage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    }
  ]


  return (
    <View style={styles.FooterWrapper}> 
        {PageInfo.map((Page, index) => { 
           return <TouchableHighlight 
                    onPress={() => navigation.navigate(Page.pageName)} 
                    underlayColor={'transparent'} 
                    style={Page.styles}
                  >
                      <View style={styles.IconContainer} key={index}> 
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