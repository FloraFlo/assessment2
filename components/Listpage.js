import React, {useState, useEffect} from 'react'; 
import {View, Text, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/core';

export function Listpage ( props ) {

    const navigation = useNavigation()

    useEffect( () => {
        if(!props.auth) {
            navigation.reset({ index:0, routes:[{name:'Signin'}]})
        }
    }, [props.auth])

    return (
    <View>
        <Text> List Page </Text>
    </View>
    )
}