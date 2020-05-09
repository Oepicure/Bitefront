import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import styles from '../styles';



class SearchScreen extends Component {
    render() {
        return (

            <View style={[styles.container]}>

                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>

                <TextInput
                    style={styles.input}
                    placeholder='Search restaurant, list, review, profile...'
                />
            </View>
        );
    }
}

export default SearchScreen;