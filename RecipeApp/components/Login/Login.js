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
        <Button text="Login" navigation={navigation} validLogin={validLogin}/>
        <Divider />
        <OffsiteLoginButton icon={googleIcon} text="Login with Google"/>
        <FooterMessage />
      </ScrollView>
      <BottomLogo />
    </View>
  )
}

export default Login