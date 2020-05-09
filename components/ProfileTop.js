import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'

const ProfileTop = () => {
        return (
            <View style={[styles.padding, styles.center, styles.row, {marginTop: 30, paddingBottom: 4}]}>
                    <View style={[styles.center, {flex: 1.5, padding: 10}]}>
                        <Image style={[styles.profilephotoLarge]}source={{uri: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'}}/>
                    </View>
                    <View style={[styles.container, styles.center]}>
                        <Text style={[styles.bold, {marginBottom: 7}]}>3</Text>
                        <Text>visits</Text>
                    </View>
                    <View style={[styles.container, styles.center]}>
                        <Text style={[styles.bold, {marginBottom: 7}]}>1</Text>
                        <Text>lists</Text>
                    </View>
                    <View style={[styles.container, styles.center]}>
                        <Text style={[styles.bold, {marginBottom: 7}]}>98</Text>
                        <Text>followers</Text>
                    </View>
                    <View style={[styles.container, styles.center]}>
                        <Text style={[styles.bold, {marginBottom: 7}]}>5</Text>
                        <Text>following</Text>
                    </View> 
            </View>
        );
    }

export default ProfileTop;