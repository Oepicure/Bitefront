import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'


class AuthNavigator extends Component {
  render () {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
          initialRouteName="Login"
          headerMode='false'
        >
          <Stack.Screen name="SignIn" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
   }
}

export default AuthNavigator;



