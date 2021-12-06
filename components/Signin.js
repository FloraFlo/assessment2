import React, {useEffect, useState} from 'react'; 
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ThemeColours } from './ThemeColours';
import { Feedback } from './Feedback';

export function Signin ( props ) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigation = useNavigation()

    useEffect( () => {
      if( props.auth === true ) {
        navigation.reset({ index: 0, routes: [ {name: 'Listpage'}]})
      }
    }, [props.auth])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Sign in </Text>
            <KeyboardAvoidingView 
                behavior = {Platform.OS === "ios" ? "padding" : "height"} 
            >
            <View style={styles.inner}>
                <Text>Email</Text>
                <TextInput style={styles.input} onChangeText={ (val) => setEmail(val)}/>

                <Text>Password</Text>   
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={ (val) => setPassword(val)}/>

                <TouchableOpacity style={styles.button} onPress={ () => { props.handler(email,password)}}>
                    <Text style={styles.buttonText}> Sign in </Text>
                </TouchableOpacity>

                <Feedback message={props.error}/> 

                <Text>Don't have an account?</Text>
                <Button title="Click here to sign up" onPress={() => navigation.navigate("Signup")}/>
            </View>
            </KeyboardAvoidingView>
            <Image style={styles.image}
                source={require('../assets/ylogo.png')}
            />
        </View>
        )
    }
    
    const styles = StyleSheet.create( {
        input: {
          backgroundColor: ThemeColours.earthYellow,
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
          backgroundColor: ThemeColours.rawSienna,
          padding: 10,
          borderRadius: 10,
        },
        container: {
          flex: 1,
          backgroundColor: ThemeColours.maximumYellowRed,
          justifyContent: 'center',
          alignItems: 'center'
        },
        buttonText: {
          color: ThemeColours.earthYellow,
          textAlign: 'center',
          fontSize: 17, 
          fontWeight: 'bold',
        },
        inner: {
          width: 350,
          marginBottom: 90,
        },
        image: {
          width: 140,
          height: 100,
      },
      title: {
        color: ThemeColours.rawSienna,
        textAlign: 'center',
        fontSize: 30, 
        fontWeight: 'bold',
        padding: 17,
          },
    }) 