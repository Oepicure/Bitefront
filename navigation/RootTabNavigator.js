import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListsNavigator, SearchNavigator, CreateNavigator, NewsNavigator, ProfileNavigator } from '../navigation/MainStackNavigator'

class RootTabNavigator extends Component {
  render () {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        initialRouteName="Lists"
        headerMode='false'
        >
          <Tab.Screen name="Lists" component={ListsNavigator} />
          <Tab.Screen name="Search" component={SearchNavigator} />
          <Tab.Screen name="Create New" component={CreateNavigator} />
          <Tab.Screen name="News" component={NewsNavigator} />   
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
   }
}

export default RootTabNavigator;



