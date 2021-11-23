import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Listpage } from './components/Listpage';
import { Singleexercise } from './components/Singleexercise';
import { Splashscreen } from './components/Splashscreen';

import { firebaseConfig } from './Config';
import {initializeApp} from 'firebase/app'; 
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'; 

initializeApp( firebaseConfig )


const Stack = createNativeStackNavigator(); 

export default function App() {

  const [ auth, setAuth ] = useState()
  const [ user, setUser ] = useState()
  const [ signupError, setSignupError ] = useState()
  const [ signinError, setSigninError ] = useState()

  const FBauth = getAuth()
  
  useEffect( () => {
    onAuthStateChanged( FBauth, (user) => {
      if( user ) {
        setAuth(true) 
        setUser(user)
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  })

  const SignupHandler = (email, password) => {
    setSignupError(null)
    createUserWithEmailAndPassword( FBauth, email, password)
    .then( ( userCredentail ) => { 
      console.log(userCredentail)
      setAuth( true ) 
      setUser( userCredentail )
    })
    .catch( (error) => { setSignupError(error.code) })
  }

  const SigninHandler = (email, password) => {
    signInWithEmailAndPassword( FBauth, email, password)
    .then( (userCredentail) => {
      setUser(userCredentail)
      setAuth(true)
    })
    .catch( (error) => { setSigninError(error.code)})
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen name="Signup" options={{title: 'Sign up'}}>
          { (props) => <Signup {...props} handler={SignupHandler} auth={auth} error={signupError}/>}
        </Stack.Screen>

        <Stack.Screen name="Signin" options={{title: 'Sign in'}}>
         { (props) => <Signin {...props} handler={SigninHandler} auth={auth} error={signinError}/>}
        </Stack.Screen>


        <Stack.Screen name="Listpage" component={Listpage}/>

        <Stack.Screen name="Singleexercise" component={Singleexercise}/>

        {/* use it at the beginning  */}
        <Stack.Screen name="Splashscreen" component={Splashscreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
