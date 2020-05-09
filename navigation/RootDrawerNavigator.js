import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {RootStackNavigator, SettingsStackNavigator} from './RootStackNavigator'


class RootDrawerNavigator extends Component {
  render () {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
          drawerPosition='right'
          //openByDefault={false}
        >
          <Drawer.Screen 
            name="Main" 
            component={RootStackNavigator}
             />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsStackNavigator}
              />

        </Drawer.Navigator>
    );
   }
}

export default RootDrawerNavigator;



