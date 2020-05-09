import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../styles';
import { AntDesign } from '@expo/vector-icons';


class NewReview extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.container, {alignItems: 'center'}]}>
                <TextInput
                        style={[{marginTop: 40, borderBottomColor: '#d3d3d3', borderBottomWidth: 1, padding: 10, width: 400}]}
                        placeholder='Choose Restaurant...'
                    />
                    <TouchableOpacity>
                        <AntDesign style={[styles.center, styles.uploadButton, {marginTop: 20, marginBottom: 5}]} name='upload' color='#d3d3d3' size={60}/>
                        <Text style={[styles.center, {marginBottom: 20, textAlign: 'center', color: '#d3d3d3'}]}>Upload Photos</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.border]}
                        multiline='true'
                        placeholder='Write Your Notes About The Restaurant Here...'
                    />
                    <TouchableOpacity style={[styles.button, {marginTop:20}]} onPress={()=> this.props.navigation.navigate('PreviewNew')}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NewReview;