import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from "@expo/vector-icons"
import TouchScreen from './src/screens/TouchScreen'
import Pin from './src/screens/PinScreen'
import HomeScreen from './src/screens/HomeScreen'


export default function App() {
  const AppStack = createStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen}/>
        <AppStack.Screen name="Pin" component={Pin}/>


      </AppStack.Navigator>
    </NavigationContainer>
  );
}
