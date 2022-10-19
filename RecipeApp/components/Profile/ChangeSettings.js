import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

import ChangeSettingsButton from './ChangeSettingsButton';

const ChangeSettings = () => {
  return (
    <View style={styles.ChangeSettings}>
        <View style={styles.SettingsTitleWrapper}>
            <Image source={require('../../Images/Settings.png')}/>
            <Text style={styles.SettingsTitle}>Manage</Text>
        </View>
        <ChangeSettingsButton text="Change username" icon={require('../../Images/Username.png')}/>
        <ChangeSettingsButton text="Change Password" icon={require('../../Images/Password.png')}/>
    </View> 
  )
}

const styles = StyleSheet.create({
    ChangeSettings: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 24,
        marginTop: 20
    },
    SettingsTitleWrapper: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 8
    },
    SettingsTitle: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginLeft: 12
    }
  });

export default ChangeSettings