import React, {useEffect} from 'react'; 
import {StyleSheet, Image, ComponentContainer} from "react-native";
import { ThemeColours } from './ThemeColours';

export function Splashscreen ({navigation}) {

useEffect (() => {setTimeout(() => {navigation.navigate('Signup');},2500)})
    
return (
    <ComponentContainer style={styles.background}>
        <Image
            source={require('../assets/yellowlogo.png')}
        />
    </ComponentContainer>
    ); 
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    backgroundColor: ThemeColours.rawSienna,
    alignItems: 'center',
    justifyContent: 'center',
    },
}); 