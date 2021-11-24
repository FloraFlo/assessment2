import React, {useEffect} from 'react'; 
import {StyleSheet, Image, Text, View, ComponentContainer} from "react-native";
import { ThemeColors } from './ThemeColours';

export function Splashscreen ({navigation}) {

useEffect (() => {setTimeout(() => {navigation.navigate('Signup');},25000)})
    
    return (
        <ComponentContainer style={styles.background}>
            <Image
                source={require('./assets/yellowlogo.png')}
            />
        </ComponentContainer>
    ); 
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: ThemeColors.rawSienna,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });