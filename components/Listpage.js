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

    const onClick = (itemId) => {
        console.log(itemId)
        navigation.navigate('Singleexercise',{name: name})
    }

    const renderItem = ({item}) => (
        <View style={styles.item} >
            <Text onPress={ () => onClick(item.time)}>{item.name}</Text>
        </View>
    )

    return (
    <View>
        <Text> List Page </Text>
        <FlatList data={ listData } renderItem={ renderItem} keyExtractor={item => item.id}/>
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10, 
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
})