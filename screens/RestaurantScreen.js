import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import RestaurantButtonMenu from '../components/RestaurantButtonMenu'


class RestaurantScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <RestaurantButtonMenu navigation={this.props.navigation}/>

                <View>
                    <Image style={[styles.listsphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-pH5TzoFNCeS3pSlEbGTNNcAoVBW2Nbztyo42HJD_RRID7qHA&usqp=CAU'}}/>
                </View>
                <View style={[styles.padding]}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Restaurant')}>
                        <Text style={[styles.bold, {fontSize: 20}]}>Restaurant Sommerfelt</Text>
                    </TouchableOpacity>
                    <Text style={[styles.grey]}>Copenhagen</Text>
                    <Text style={[styles.greySmall]}>Neighbourhood: Vesterbro</Text>
                    <Text style={[styles.italic, {fontSize: 12, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud isi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</Text>
                <View style={[styles.padding, styles.row, styles.space]}>
                    <Text style={[styles.greySmall]}>Style: New Nordic, Modern</Text>
                    <Text style={[styles.greySmall]}>Price: $$$</Text>
                </View>
                </View>
            </View>
        );
    }
}

export default RestaurantScreen;