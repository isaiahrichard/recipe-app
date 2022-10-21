import React, {useState} from 'react'
import {View, ScrollView} from 'react-native';

import FieldBoxWrapper from './FieldBoxWrapper';
import Title from './Title';
import CheckBoxMsg from '../CheckBoxMsg'
import Button from '../Button';
import Divider from './Divider';
import OffsiteLoginButton from './OffsiteLoginButton';
import FooterMessage from './FooterMessage';
import BottomLogo from './BottomLogo';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const onLoggedIn = token => {
  fetch(`${API_URL}/public`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
      },
  })
  .then(async res => { 
      try {
          const jsonRes = await res.json();
          if (res.status === 200) {
              console.log(jsonRes)
          }
      } catch (err) {
          console.log(err);
      };
  })
  .catch(err => {
      console.log(err);
  });
}

const Login = ( {navigation} ) => {

  const [validLogin, setValidLogin] = useState(false);

  googleIcon = require('../../Images/Google.png')

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Title />
        <FieldBoxWrapper setValidLogin={setValidLogin}/>
        <View style={{marginTop: 22}}>
          <CheckBoxMsg message="Remember me"/>
        </View>
        <Button text="Login" navigation={navigation} validLogin={validLogin} onButton={onLoggedIn}/>
        <Divider />
        <OffsiteLoginButton icon={googleIcon} text="Login with Google"/>
        <FooterMessage />
      </ScrollView>
      <BottomLogo />
    </View>
  )
}

export default Login