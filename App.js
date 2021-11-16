import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Listpage } from './components/Listpage';
import { Singleexercise } from './components/Singleexercise';
import { Splashscreen } from './components/Splashscreen';

import { firebaseConfig } from './Config';
import {initializeApp} from 'firebase/app'; 

initializeApp( firebaseConfig )


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Listpage" component={Listpage}/>
        <Stack.Screen name="Singleexercise" component={Singleexercise}/>
        <Stack.Screen name="Splashscreen" component={Splashscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
