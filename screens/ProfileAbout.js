import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import ProfileTop from '../components/ProfileTop'
import ProfileButtonMenu from '../components/ProfileButtonMenu'



class ProfileAbout extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <ProfileTop/>
                <ProfileButtonMenu navigation={this.props.navigation}/>

                <View style={[styles.padding]}>
                    <Text style={[styles.textHeadline, styles.bold, {color: 'grey'}]}>About Me</Text>
                </View>

                <View style={[styles.padding]}>
                    <Text style={[styles.grey]}>Occupation: Sommelier</Text>
                    <Text style={[styles.grey]}>Location: Copenhagen</Text>
                    <Text style={[styles.grey]}> </Text>
                    <Text style={[styles.italic, {fontSize: 12, paddingBottom: 30}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</Text>
                </View>


            </View>
        );
    }
}

export default ProfileAbout;