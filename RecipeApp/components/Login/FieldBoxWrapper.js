import React, {useState, useEffect} from 'react'
import {View} from 'react-native';

import FieldBox from './FieldBox';


const FieldBoxWrapper = ({setValidLogin}) => {
    usernameIcon = require('../../Images/Footer/LoginLight.png')
    passwordIcon = require('../../Images/Footer/LoginDark.png')
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const usernameObj = {
      value: username, 
      setValue: setUsername, 
      placeholder: "Username or email", 
      isPassword: false
    }
  
    const passwordObj = {
      value: password, 
      setValue: setPassword, 
      placeholder: "Password", 
      isPassword: true
    }

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
        <FieldBox icon={usernameIcon} inputObj={usernameObj}/>
        <FieldBox icon={passwordIcon} inputObj={passwordObj}/>
    </View>
  )
}


export default FieldBoxWrapper