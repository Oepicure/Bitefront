import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import { Ionicons } from '@expo/vector-icons';


class RestaurantFind extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <View style={[styles.row, styles.center, {marginTop: 15, marginBottom: 15}]}>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall, {flex:1.3}]} onPress={()=> this.props.navigation.navigate('Restaurant')}>
                        <Text style={[styles.textTab]}>Restaurant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantPhoto')}>
                        <Text style={[styles.textTab]}>Photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantMenu')}>
                        <Text style={[styles.textTab]}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantReviews')}>
                        <Text style={[styles.textTab]}>Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantFind')}>
                        <Text style={[styles.textTab]}>Find</Text>
                        <View style={{height: 3, backgroundColor: 'black', marginStart: 3, marginEnd: 3} }></View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Image style={[styles.listsphoto]} source={{uri: 'https://frumik.dk/wp-content/uploads/google-maps.jpg'}}/>
                </View>
                <View style={[styles.padding]}>
                    <View style={[{marginTop: 10}]}>
                        <Text style={[styles.bold, {fontSize: 16}]}>Restaurant Sommerfelt</Text>
                    </View>
                        <Text style={[ styles.adresseText, {paddingTop:5}]}>Vesterbrogade 144, A2</Text>
                        <Text style={[ styles.adresseText]}>1721 København V</Text>
                        <Text style={[ styles.bold, {paddingTop: 20}]}>Kontakt</Text>
                        <Text style={[ styles.adresseText]}>Email: Restaurant@sommer.com</Text>
                        <Text style={[ styles.adresseText]}>Tel.nr.: 2288 2288</Text>
                </View>
                <View style={[styles.padding, styles.row, styles.center, {padding: 50}]}>
                    <Ionicons name={'logo-facebook'} color='black' size={40} style={{padding: 20}}/>
                    <Ionicons name={'logo-instagram'} color='black' size={40} style={{padding: 20}}/>
                    <Ionicons name={'ios-mail'} color='black' size={40} style={{padding: 20}}/>
                </View>


            </View>
        );
    }
}

export default RestaurantFind;