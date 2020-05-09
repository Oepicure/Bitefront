import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'

const RestaurantButtonMenu = ({navigation}) => {
        return (
        <View style={[styles.row, styles.center, {marginTop: 15, marginBottom: 15}]}>
            <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall, {flex:1.3}]} onPress={()=> navigation.navigate('Restaurant')}>
                <Text style={[styles.textTab]}>Restaurant</Text>
                <View style={{height: 3, backgroundColor: 'black', marginStart: 3, marginEnd: 3} }></View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('RestaurantPhoto')}>
                <Text style={[styles.textTab]}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('RestaurantMenu')}>
                <Text style={[styles.textTab]}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('RestaurantReviews')}>
                <Text style={[styles.textTab]}>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> navigation.navigate('RestaurantFind')}>
                <Text style={[styles.textTab]}>Find</Text>
            </TouchableOpacity>
        </View>

);
    }

export default RestaurantButtonMenu;