import React from 'react'
import {View, StyleSheet, Image, TextInput} from 'react-native';


const FieldBox = ({icon, inputObj}) => {


  return (
    <View style={styles.InputWrapper}>
        <View style={styles.IconWrapper}>
            <Image source={icon}/>
        </View>
        <View style={styles.InputBox}>
            <TextInput
                placeholder={inputObj.placeholder}
                placeholderTextColor="#515151"
                underlineColorAndroid="transparent"
                spellCheck={false}
                value={inputObj.value}
                onChange={(inputText) => inputObj.setValue(inputText)}
                secureTextEntry={inputObj.isPassword}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    InputBox: {
        borderLeftWidth: 1,
        borderLeftColor: '#686060',
        flexGrow: 2.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 10,
    },
    InputWrapper : {
        flexDirection: 'row',
        marginHorizontal: 55,
        marginTop: 22,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#686060',
    },
    IconWrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 50
    }
  });

export default FieldBox