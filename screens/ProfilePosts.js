import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import ProfileTop from '../components/ProfileTop'
import ProfileButtonMenu from '../components/ProfileButtonMenu'


class ProfilePosts extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <ProfileTop/>
                <ProfileButtonMenu navigation={this.props.navigation}/>

                <View style={[styles.padding]}>
                    <Text style={[styles.textHeadline, styles.bold, {color: 'grey'}]}>My Lists</Text>
                </View>


                <TouchableOpacity style={[styles.row, {paddingBottom: 1}]} >
                    <View style={[styles.container, styles.background]}>
                        <Image style={[styles.listphoto]} source={{uri: 'https://blog.dinnerbooking.com/wp-content/uploads/2020/01/DBA_9474-xl.jpg'}}/>
                    </View>
                    <View style={[styles.container, styles.padding, {flex: 1.5}]}>
                        <Text style={[styles.bold, {fontSize: 12}]}>Min Guide til de Bedste Spisesteder i København</Text>
                        <Text style={[styles.grey]}>Af Trine Holm</Text>
                        <Text style={[styles.greySmall]}>Location: Copenhagen, Denmark</Text>
                        <Text style={[styles.greySmall]}>Last Updated: 10.01.19</Text>
                        <Text style={[styles.italic]}>"Dette er en kort beskrivelse af guiden. Ut veniam..."</Text>
                    </View>
                </TouchableOpacity>

            </View>


        );
    }
}

export default ProfilePosts;