import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TouchScreen from './src/screens/TouchScreen'

export default function App() {
  const AppStack = createStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
