import React from 'react';

import HomePage from './components/HomePage/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;