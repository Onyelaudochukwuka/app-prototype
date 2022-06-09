import React, { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, Text, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SigninScreen } from './src/screens';
const Stack = createNativeStackNavigator();
export default function App() {

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen options={{ headerShown: false }}name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }}name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }}name="SignIn" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300
  }
});
