import React, {useState, useEffect} from 'react'; 
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ThemeColours } from './ThemeColours';


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
        navigation.navigate('Singleexercise',{name: item.name, level: item.level, duration: item.duration, description: item.description} )
    }

    const renderItem = ({item}) => (
        <View style={styles.item} >
            <Text onPress={ () => onClick(item)}> {item.name}</Text>
        </View>
    )

    return (
    <View style={styles.container}>
        <View style={styles.input}> 
            <FlatList data={ listData } renderItem={ renderItem} keyExtractor={item => item.id}/>  
        </View>
        <View style={styles.container1}>
            <Image style={styles.image}
                source={require('../assets/yellowlogo.png')}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create( {
    item: {
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
        width: 370,
        height: 370,
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
      },
}) 