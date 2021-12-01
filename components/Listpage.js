import React, {useState, useEffect} from 'react'; 
import {View, Text, StyleSheet, FlatList} from "react-native";
import { useNavigation } from '@react-navigation/core';

export function Listpage ( props ) {

    const navigation = useNavigation()
    const [ listData, setListdata ] = useState()

    useEffect( () => {
        if(!props.auth) {
            navigation.reset({ index:0, routes:[{name:'Signin'}]})
        }
    }, [props.auth])

    useEffect( () => {
        setListdata( props.data )
    }, [props.data])

    const renderItem = ({item}) => (
        <View><Text>{item.name}</Text></View>
    )

    return (
    <View>
        <Text> List Page </Text>
        <FlatList data={ listData } renderItem={ renderItem} keyExtractor={item => item.id}/>
    </View>
    )
}