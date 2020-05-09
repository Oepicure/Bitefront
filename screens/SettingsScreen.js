import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'


class SettingsScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <Text>SettingsScreen</Text>
            </View>
        );
    }
}

export default SettingsScreen;