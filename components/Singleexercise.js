import React, {useEffect, useState} from 'react'; 
import {View, Text, StyleSheet, Image} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/core';
import { ThemeColours } from './ThemeColours';

export function Singleexercise ( props ) {

    // const [name, setName] = useState()
    // const [duration, setDuration] = useState()
    // const [level, setLevel] = useState() 

    const route = useRoute()
    const {name} = route.params
    const {level} = route.params
    const {duration} = route.params
    const {description} = route.params

    return (
    <View style={styles.container}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle1}> Duration: {duration} </Text>
        <Text style={styles.subtitle2}> Level: {level} </Text>
        <Image style={styles.image}
                source={require('../assets/yogasunset.jpeg')}
            />
        <Text style={styles.description}>Steps: {description} </Text>
    </View>
    )
}

const styles = StyleSheet.create( {
    title: {
      color: ThemeColours.cafeAuLait,
      textAlign: 'center',
      fontSize: 30, 
      fontWeight: 'bold',
      padding: 7,
        },
    subtitle1: {
        color: ThemeColours.cafeAuLait,
        textAlign: 'center',
        fontSize: 20, 
        padding: 2,
        },
    subtitle2: {
        color: ThemeColours.cafeAuLait,
        textAlign: 'center',
        fontSize: 17, 
        padding: 5,
        },
    description: {
        color: ThemeColours.white,
        fontSize: 14, 
        padding: 10,
            },    
    background: {
    padding: 10, 
    borderBottomColor: ThemeColours.earthYellow,
    borderBottomWidth: 1,
    },
    input: {
      backgroundColor: ThemeColours.rawSienna,
      fontSize: 16,
      padding: 5,
      borderRadius: 4,
    },
    button: {
      marginVertical: 15,
      backgroundColor: ThemeColours.beaver,
      padding: 10,
      borderRadius: 10,
    },
    buttonDisabled: {
      marginVertical: 15,
      backgroundColor: ThemeColours.earthYellow,
      padding: 10,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      backgroundColor: ThemeColours.maximumYellowRed,
    },
    buttonText: {
      color: ThemeColours.earthYellow,
      textAlign: 'center',
      fontSize: 17, 
      fontWeight: 'bold',
    },
    inner: {
      width: 300,
      marginBottom: 90,
    },
    image: {
        width: 450,
        height: 170,
        
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
      },
}) 