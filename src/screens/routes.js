import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Movie from './movies'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "home" component={Home} />
        <Drawer.Screen name = "movie" component={Movie}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
