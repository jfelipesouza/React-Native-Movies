import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
