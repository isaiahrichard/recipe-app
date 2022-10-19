import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

const ChangeSettingsButton = ( {text, icon} ) => {


  return (
    <View style={styles.ButtonWrapper}>
        <Text style={styles.TabBarText}>{text}</Text>
        <Image source={icon} style={styles.OptionIcon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        backgroundColor: '#FFC7C7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 16,
        paddingLeft: 33,
        marginTop: 9
    },
    TabBarText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        paddingTop: 3,
        color: '#000'
    },
    OptionIcon: {
        position: 'absolute',
        right: 29
    }
  });

export default ChangeSettingsButton