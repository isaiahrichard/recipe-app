import React, {useState, useEffect, useContext} from 'react'
import {View} from 'react-native';
import FieldBox from './FieldBox';
import { StateContext } from '../Context/StateContext';


const FieldBoxWrapper = ({setValidLogin}) => {
    usernameIcon = require('../../Images/Footer/LoginLight.png')
    passwordIcon = require('../../Images/Footer/LoginDark.png')

    const {usernameObj, passwordObj} = useContext(StateContext)
  
    const username = usernameObj[0]
    const password = passwordObj[0]
  

    useEffect(() => {
      if(username && password){
        setValidLogin(true)
      }
      else{
        setValidLogin(false)
      }
    }, [username, password])
    

  return (
    <View style={{flex: 1}}>
        <FieldBox icon={usernameIcon} />
        <FieldBox icon={passwordIcon} isPassword={true}/>
    </View>
  )
}


export default FieldBoxWrapper