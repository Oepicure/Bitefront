import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import RootTabNavigator from './RootTabNavigator'
import Header from '../components/Header'
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles.js'


const Stack = createStackNavigator();

export const RootStackNavigator = () => {
    return (
        <Stack.Navigator 
        >
          <Stack.Screen 
            name="RootTab" 
            component={RootTabNavigator}
            options= {({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation}/>,
                headerRight: () => <Ionicons style={styles.menuicon} name='md-menu' size={30} onPress={() => navigation.openDrawer()} />
            })} />
        </Stack.Navigator>
    );
}

export const SettingsStackNavigator = () => {
  return (
      <Stack.Navigator 
      >
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options= {({ navigation }) => ({
              headerTitle: () => <Header navigation={navigation}/>,
              headerRight: () => <Ionicons style={styles.icon} name='md-menu' size={30} onPress={() => navigation.openDrawer()} />
          })} />
      </Stack.Navigator>
  );
}

