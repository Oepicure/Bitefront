import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import ProfileTop from '../components/ProfileTop'
import ProfileButtonMenu from '../components/ProfileButtonMenu'


class ProfileScore extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <ProfileTop/>
                <ProfileButtonMenu navigation={this.props.navigation}/>

                <View style={[styles.row, styles.space, {paddingLeft: 15, paddingRight: 15, height: 40, marginTop: 30}]}>
                    <Text>Visits</Text>
                    <Text style={[styles.bold]}>98</Text>
                </View>

                <View style={[styles.row, styles.space, {paddingLeft: 15, paddingRight: 15, height: 40}]}>
                    <Text>Lists</Text>
                    <Text style={[styles.bold]}>98</Text>
                </View>

                <View style={[styles.row, styles.space, {paddingLeft: 15, paddingRight: 15, height: 40}]}>
                    <Text>Followers</Text>
                    <Text style={[styles.bold]}>98</Text>
                </View>

                <View style={[styles.row, styles.space, {paddingLeft: 15, paddingRight: 15, height: 40}]}>
                    <Text>Likes</Text>
                    <Text style={[styles.bold]}>98</Text>
                </View>


            </View>
        );
    }
}

export default ProfileScore;