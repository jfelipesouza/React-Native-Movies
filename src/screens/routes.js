import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeContext} from 'styled-components';
import {MaterialCommunityIcons} from '@expo/vector-icons';

//---- Importação das telas ----//
import Home from './home';
import Movie from './movies'





const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Routes(){

  const themeContext = useContext(ThemeContext);

  return(
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown:false,

          drawerStyle:{
            backgroundColor: themeContext.black.main,
            paddingTop: 10,
          },

          drawerActiveBackgroundColor:themeContext.secondary.main,

          drawerActiveTintColor:themeContext.text.main,
          drawerInactiveTintColor:themeContext.text.gray
        }}

      >

        <Drawer.Screen
          name = 'pricinpal'
          component = {StackRoutes}
          options = {{
            title:"Home",
            drawerIcon:({focused,size,color})=>(
              <MaterialCommunityIcons
                name={focused?'movie-open':'movie-open-outline'}
                size={size}
                color={color }
              />
            )
          }}
        />

        <Drawer.Screen
          name = "movie"
          component={Movie}
          options={{
            title:"Meus Filmes",
            drawerIcon:({focused,size,color})=>(
              <MaterialCommunityIcons
                name={focused?'archive':'archive-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

      </Drawer.Navigator>


    </NavigationContainer>
  )
}

const StackRoutes = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = 'home'
        component = {Home}
        options = {{
          headerShown:false,
        }}
      />
    </Stack.Navigator>
  )
}
