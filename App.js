import 'react-native-gesture-handler';
import React from 'react';
import {View,StatusBar } from 'react-native';
import Routes from './src/screens/routes';



export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="#123"
      />
      <Routes/>
    </View>
  );
}
