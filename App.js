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

import { Signout } from './components/Signout';

import { firebaseConfig } from './Config';
import {initializeApp} from 'firebase/app'; 
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'; 
import { initializeFirestore, getFirestore, setDoc, doc, collection, query, where, onSnapshot} from 'firebase/firestore'; 

//initialize firestore 
const FBapp = initializeApp( firebaseConfig)
const FSdb = initializeFirestore(FBapp, {useFetchStreams: false})
const FBauth = getAuth()


const Stack = createNativeStackNavigator(); 

export default function App() {

  const [ auth, setAuth ] = useState()
  const [ user, setUser ] = useState()
  const [ signupError, setSignupError ] = useState()
  const [ signinError, setSigninError ] = useState()
  const [ data, setData ] = useState() 

  const FBauth = getAuth()
  const firestore = getFirestore() 
  
  useEffect( () => {
    onAuthStateChanged( FBauth, (user) => {
      if( user ) {
        setAuth(true) 
        setUser(user)
        if (!data) { getData() }
      }
      else {
        setAuth(false)
        setUser(null)
      }
    })
  })

  /* useEffect ( () => {
    if ( !data && user) {
      getData()
    }
  }, [data, auth, user]) */

  const SignupHandler = (email, password) => {
    setSignupError(null)
    createUserWithEmailAndPassword( FBauth, email, password)
    .then( ( userCredentail ) => { 
      console.log(userCredentail)
      addDoc( collection( firestore, 'users'), { id: userCredentail.user.uid, email: userCredential.email})
      // createUser('user', { id: userCredentail.user.uid, email: userCredential.email})
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

  const SignoutHandler = () => {
    signOut( FBauth ).then( () => {
      setAuth( false )
      setUser( null )
    })
    .catch( (error) => console.log(error.code) )
  }

  const createUser = async ( collection, data ) => {
    firestore.collection( collection ).doc(data.id).set(data)
    .then( (response) => console.log(response))
    .catch((error) => console.log(error))
  }  

  //read data
  const getData = () => {
    const FSquery = query(collection( FSdb, `yoga`) )
    const unsubscribe = onSnapshot( FSquery, ( querySnapshot ) => {
      let FSdata = []
      querySnapshot.forEach( (doc) => {
        let item = {}
        item = doc.data()
        item.id = doc.id
        FSdata.push( doc.data())
      })
      setData( FSdata )
    })
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen">
      <Stack.Screen name="Splashscreen" component={Splashscreen}/>

        <Stack.Screen name="Signup" options={{title: 'Sign up'}}>
          { (props) => <Signup {...props} handler={SignupHandler} auth={auth} error={signupError}/>}
        </Stack.Screen>

        <Stack.Screen name="Signin" options={{title: 'Sign in'}}> 
         { (props) => <Signin {...props} auth={auth} handler={SigninHandler} error={signinError}/>}
        </Stack.Screen>

        <Stack.Screen name="Listpage" options={{headerTitle: 'List page',
        headerRight: (props) => <Signout {...props} handler={SignoutHandler} user={user}/>}}>
         { (props) => <Listpage {...props} auth={auth} data={data}/>} 
        </Stack.Screen>

        <Stack.Screen name="Singleexercise" component={Singleexercise}/>
        
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
