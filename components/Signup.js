import React, {useState, useEffect} from 'react'; 
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ThemeColours } from './ThemeColours';
import { Feedback } from './Feedback';


export function Signup ( props ) {
    const [ validEmail, setValidEmail ] = useState( false )
    const [ validPassword, setValidPassword] = useState( false )
    const [ validForm, setValidForm] = useState( false )

    const [ email, setEmail] = useState()
    const [ password, setPassword] = useState()

    const navigation= useNavigation ( false )

    const validateEmail = ( emailVal) => {
        if( emailVal.indexOf('@') > 0 ) {
            setValidEmail( true )
        }
        else{
           setValidEmail( false ) 
        }
        setEmail( emailVal )
    }

    const validatePassword = ( passwordVal ) => {
        if( passwordVal.length >= 8) {
            setValidPassword( true )
        }
        else {
            setValidPassword( false )
        }
        setPassword( passwordVal )
    }

    const sumbitHandler = () => {
        props.handler( email, password )
    }

    useEffect( () => {
        if( validEmail && validPassword) {
            setValidForm( true )
        }
        else {
            setValidForm( false)
        }
    }, [validEmail, validPassword])

    useEffect( () => {
        if( props.auth === true ) {
            navigation.reset({ index: 0, routes: [ {name: 'Listpage'}]})
        }
    }, [props.auth])

    return (
    <View style={styles.container}>
        <Text> Sign up </Text>
        <KeyboardAvoidingView 
            behavior = {Platform.OS === "ios" ? "padding" : "height"} 
        >
        <View style={styles.inner}>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={ (val) => validateEmail(val)}/>
            
            <Text>Password</Text>   
            <TextInput style={styles.input} 
            onChangeText={ (val) => validatePassword(val)}
            secureTextEntry={true}
            />

            <TouchableOpacity 
                style={(validForm) ? styles.button : styles.buttonDisabled}
                disabled={(validForm) ? false : true }
                onPress={ () => sumbitHandler() }
            >

                <Text style={styles.buttonText}> Sign up </Text>
            </TouchableOpacity>

            <Feedback message={props.error}/>

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