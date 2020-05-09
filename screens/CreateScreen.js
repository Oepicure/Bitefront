import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles';


class NewReview extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.container, styles.center]}>
                    <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('NewReview')}>
                        <Text>Mark Visit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('NewList')}>
                        <Text>Create New List</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NewReview;