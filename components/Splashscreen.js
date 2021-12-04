import React, {useEffect} from 'react'; 
import {StyleSheet, Image, ComponentContainer, View} from "react-native";
import { ThemeColours } from './ThemeColours';

export function Splashscreen ({navigation}) {

useEffect (() => {setTimeout(() => {navigation.navigate('Signup')},2500)})
    
return (
    <View style={styles.background}>
        <Image style={styles.image}
            source={require('../assets/yellowlogo.png')}
        />
    </View>
    ); 
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: ThemeColours.maximumYellowRed,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: 450,
        height: 450,
        resizeMode: 'contain',
        alignItems: 'center',
    },
}); 