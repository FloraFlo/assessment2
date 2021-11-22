import React from 'react'; 
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ThemeColours } from 'react-navigation';


export function Signup ( props ) {

    const navigation= useNavigation ()

    return (
    <View style={styles.container}>
        <Text> Sign up </Text>
        <KeyboardAvoidingView 
            behavior = {Platform.OS === "ios" ? "padding" : "height"} 
        >
        <View style={styles.inner}>
            <Text>Email</Text>
            <TextInput style={styles.input}/>
            <Text>Password</Text>   
            <TextInput style={styles.input}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Signup </Text>
            </TouchableOpacity>
            <Text>Already have an account?</Text>
            <Button title="Click here to sign in" onPress={() => navigation.navigate("Signin")}/>
        </View>
        </KeyboardAvoidingView>
    </View>
    )
}

const styles = StyleSheet.create( {
    input: {
      backgroundColor: ThemeColours.maximumYellowRed,
      fontSize: 16,
      padding: 5,
      borderRadius: 4,
    },
    button: {
      marginVertical: 15,
      backgroundColor: ThemeColours.cafeAuLait,
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
      backgroundColor: ThemeColours.rawSienna,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: ThemeColours.cafeAuLait,
      textAlign: 'center',
    },
    inner: {
      width: 300,
      marginBottom: 90,
    },
}) 