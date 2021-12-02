import React, {useEffect, useState} from 'react'; 
import {View, Text, StyleSheet} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/core';

export function Singleexercise ( props ) {

    // const [name, setName] = useState()
    // const [duration, setDuration] = useState()
    // const [level, setLevel] = useState() 

    const route = useRoute()
    const {name} = route.params
    const {level} = route.params
    const {duration} = route.params

    return (
    <View>
        <Text> {name} </Text>
        <Text> Duration: {duration} </Text>
        <Text> Level: {level} </Text>
        <Text> {route.name}</Text>
    </View>
    )
}