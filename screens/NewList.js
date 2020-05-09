import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles';
import { AntDesign } from '@expo/vector-icons';


class NewList extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.container, {alignItems: 'center'}]}>
                <TextInput
                        style={[styles.textInput]}
                        placeholder='Pick Places For Your List...'
                    />
                    <TouchableOpacity>
                        <AntDesign style={[styles.center, styles.uploadButton, {marginTop: 20, marginBottom: 5}]} name='upload' color='#d3d3d3' size={60}/>
                        <Text style={[styles.center, {marginBottom: 20, textAlign: 'center', color: '#d3d3d3'}]}>Upload Main Photo</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.border, {height: 100}]}
                        multiline='true'
                        placeholder='List Headline...'
                    />
                    <TouchableOpacity style={[styles.button, {marginTop:20}]} onPress={()=> this.props.navigation.navigate('PreviewNew')}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NewList;