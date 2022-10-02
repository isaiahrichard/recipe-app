import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

const OptionButton = ( {addMode, title} ) => {

    const renderIcon = () => {
        if(addMode){
            return <Image source={require('../../Images/Add.png')} style={styles.OptionIcon}/>
        }
        return <Image source={require('../../Images/Remove.png')} style={styles.OptionIcon}/>
    }

    const buttonMode = () => {
        if(addMode){
            return styles.ButtonWrapper
        }
        return [styles.ButtonWrapper, {backgroundColor: '#FF6C6C'}]
    }

  return (
    <View style={buttonMode()}>
        <Text style={styles.TabBarText}>{title}</Text>
        {renderIcon()}
    </View>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        maxWidth: 171,
        paddingVertical: 5,
        flexBasis: 50
    },
    TabBarText: {
        marginRight: 25,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
        paddingTop: 3,
        color: '#000'
    },
    OptionIcon: {
        position: 'absolute',
        right: 15
    }
  });

export default OptionButton