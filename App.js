import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HomeScreen from './screens/HomeScreen';
import Loading from './screens/Loading';
import { firebaseConfig } from './config';
import VideoCall from './screens/VideoCall';

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <>

    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
      </Stack.Navigator>

      {/* <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator> */}
    </NavigationContainer>

    </>
  );
}