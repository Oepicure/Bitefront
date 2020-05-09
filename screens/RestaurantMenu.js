import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'

class RestaurantMenu extends Component {
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
                        <View style={{height: 3, backgroundColor: 'black', marginStart: 3, marginEnd: 3} }></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantReviews')}>
                        <Text style={[styles.textTab]}>Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantFind')}>
                        <Text style={[styles.textTab]}>Find</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.container]}>
                        <Image style={[{height: '100%', width: '100%'}]} source={{uri: 'https://www.vaerftet-restaurant.dk/wp-content/uploads/2019/11/aften-menu-.png'}}/>
                </View>
            </View>        
        );
    }
}

export default RestaurantMenu;