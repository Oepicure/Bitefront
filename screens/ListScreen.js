import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'


class ListScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>

                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <View>
                    <Text style= {[styles.textHeadline, styles.bold, styles.center, styles.padding, {marginTop: 15}]}>Topkokkenes Guide til De Bedste Spisesteder i København</Text>
                    <Image style={[styles.listsphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-pH5TzoFNCeS3pSlEbGTNNcAoVBW2Nbztyo42HJD_RRID7qHA&usqp=CAU'}}/>
                </View>
                <View style={[styles.padding]}>
                    <Text style={[styles.grey]}>Af Redaktionen</Text>
                    <Text style={[styles.italic, {fontSize: 12, paddingBottom: 30}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</Text>
                </View>

                <TouchableOpacity style={[styles.row, {paddingBottom: 1}]} onPress={()=> this.props.navigation.navigate('Review')}>
                    <View style={[styles.container, styles.background]}>
                        <Image style={[styles.listphoto]} source={{uri: 'https://blog.dinnerbooking.com/wp-content/uploads/2020/01/DBA_9474-xl.jpg'}}/>
                    </View>
                    <View style={[styles.container, styles.padding, {flex: 1.5}]}>
                        <Text style={[styles.bold, {fontSize: 12}]}>Restaurant Sommerfelt</Text>
                        <Text style={[styles.grey]}>Af Redaktionen</Text>
                        <Text style={[styles.greySmall]}>Style: New Nordic, Modern</Text>
                        <Text style={[styles.greySmall]}>Price: $$$</Text>
                        <Text style={[styles.italic]}>"Dette er en kort beskrivelse af restauranten. Ut veniam..."</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.row, {paddingBottom: 1}]} onPress={()=> this.props.navigation.navigate('Review')}>
                    <View style={[styles.container, styles.background]}>
                        <Image style={[styles.listphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmB7OD1fvQQfKPF5-ikcw1dkl-dz8TOR5HgAaT-fX-MZpMm9Hi&usqp=CAU'}}/>
                    </View>
                    <View style={[styles.container, styles.padding, {flex: 1.5}]}>
                        <Text style={[styles.bold, {fontSize: 12}]}>Restaurant Spis</Text>
                        <Text style={[styles.grey]}>Af Redaktionen</Text>
                        <Text style={[styles.greySmall]}>Style: New Nordic, Modern</Text>
                        <Text style={[styles.greySmall]}>Price: $$$</Text>
                        <Text style={[styles.italic]}>"Dette er en kort beskrivelse af restauranten. Ut veniam..."</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

export default ListScreen;