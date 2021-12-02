import React, {useEffect, useState} from 'react'; 
import {View, Text, StyleSheet} from "react-native";

export function Singleexercise ( props ) {

    const [name, setName] = useState()
    const [duration, setDuration] = useState()
    const [level, setLevel] = useState() 

    return (
    <View>
        <Text> Singleexercise page </Text>
        <Text> {name} </Text>
        <Text> Duration: {duration} </Text>
        <Text> Level: {level} </Text>
    </View>
    )
}