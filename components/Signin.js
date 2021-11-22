import React from 'react'; 
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ThemeColours } from './ThemeColours';

export function Signin ( props ) {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text> Sign in </Text>
            <KeyboardAvoidingView 
                behavior = {Platform.OS === "ios" ? "padding" : "height"} 
            >
            <View style={styles.inner}>
                <Text>Email</Text>
                <TextInput style={styles.input}/>
                <Text>Password</Text>   
                <TextInput style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Sign in </Text>
                </TouchableOpacity>
                <Text>Don't have an account?</Text>
                <Button title="Click here to sign in" onPress={() => navigation.navigate("Signin")}/>
            </View>
            </KeyboardAvoidingView>
        </View>
        )
    }
    
    const styles = StyleSheet.create( {
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
          width: 300,
          marginBottom: 90,
        },
    }) 