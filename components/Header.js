import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles.js'


const Header = ({navigation}) => {

return (
    <View style={styles.headercontainer}>
            <Text style={[styles.headerText]}>Bite For Bite</Text>
    </View>
);
}

export default Header;


