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

    const onClick = (item) => {
        console.log(item.id)
        navigation.navigate('Singleexercise',{name: item.name, level: item.level, duration: item.duration} )
    }

    const renderItem = ({item}) => (
        <View style={styles.item} >
            <Text onPress={ () => onClick(item)}> {item.name}</Text>
        </View>
    )

    return (
    <View>
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