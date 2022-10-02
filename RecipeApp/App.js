import React from 'react';

import HomePage from './components/Home/Home';
import Options from './components/Options/Options';
import Recipes from './components/Recipes/Recipes';
import Profile from './components/Profile/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='home' component={HomePage}/>
          <Stack.Screen name='options' component={Options}/>
          <Stack.Screen name='recipes' component={Recipes}/>
          <Stack.Screen name='profile' component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;