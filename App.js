import 'react-native-gesture-handler';
import React from 'react';
import {View,StatusBar } from 'react-native';
import Routes from './src/screens/routes';
import {ThemeProvider} from 'styled-components'
import theme from './src/styles/themes'

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <View style={{flex:1}}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.primary.main}
        />
        <Routes/>
      </View>
    </ThemeProvider>
  );
}
