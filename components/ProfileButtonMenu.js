import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'

const ProfileButtonMenu = ({navigation}) => {
        return (
            <View style={[styles.row, styles.center, {marginTop: 15, marginBottom: 15}]}>
                <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall, {flex:1}]} onPress={()=> navigation.navigate('Profile')}>
                    <Text style={[styles.textTab]}>Visites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('ProfilePosts')}>
                    <Text style={[styles.textTab]}>Lists</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('ProfileAbout')}>
                    <Text style={[styles.textTab]}>About Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('ProfileScore')}>
                    <Text style={[styles.textTab]}>Score</Text>
                </TouchableOpacity>
            </View>

);
    }

export default ProfileButtonMenu;