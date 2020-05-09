import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'
import { Ionicons } from '@expo/vector-icons';


class ListsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{height: 30, backgroundColor: 'floralwhite'} }></View>
                <View style={[styles.row, styles.center, styles.space]}>
                    <View style={[styles.padding, styles.center]}>
                        <Image style={[styles.profilephoto]}source={{uri: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'}}/>
                    </View>
                    <View style={[styles.paddingTopBottom, styles.center, styles.left, {flex:4}]}>
                        <Text style={[styles.bold]}>Redaktionen</Text>
                        <Text style={[styles.grey]}>Copenhagen</Text>
                    </View>
                    <View style={[styles.center, styles.padding]}>
                        <Ionicons style={[styles.center]} name='ios-heart' color='#db565b' size={30}/>
                    </View>
                </View>

                <TouchableOpacity onPress={()=> this.props.navigation.navigate('List')}>
                    <Image style={[styles.listsphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-pH5TzoFNCeS3pSlEbGTNNcAoVBW2Nbztyo42HJD_RRID7qHA&usqp=CAU'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.padding, {paddingBottom: 2}]} onPress={()=> this.props.navigation.navigate('List')}>
                    <Text style= {[styles.textHeadline]}>Topkokkenes Guide til De Bedste Spisesteder i København</Text>
                    <Text style={[styles.greySmall]}>Last Updated: 10.01.85</Text>
                </TouchableOpacity>

                <View style={{height: 20, backgroundColor: '#fff'} }></View>
                <View style={{height: 5, backgroundColor: 'floralwhite'} }></View>
                
                <View style={[styles.row, styles.center, styles.space]}>
                    <View style={[styles.padding, styles.center]}>
                        <Image style={[styles.profilephoto]}source={{uri: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'}}/>
                    </View>
                    <View style={[styles.paddingTopBottom, styles.center, styles.left, {flex:4}]}>
                        <Text style={[styles.bold]}>Profil Navn</Text>
                        <Text style={[styles.grey]}>Location</Text>
                    </View>
                    <View style={[styles.center, styles.padding]}>
                        <Ionicons style={[styles.center]} name='ios-heart' color='#db565b' size={30}/>
                    </View>
                </View>

                <TouchableOpacity onPress={()=> this.props.navigation.navigate('List')}>
                    <Image style={[styles.listsphoto]} source={{uri: 'https://politiken.dk/ibyen/img6079402.g8idjp/ORIGINALS/original_960/Barkontrol%20Cork%20Vinbar%206'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.padding, {paddingBottom: 2}]} onPress={()=> this.props.navigation.navigate('List')}>
                    <Text style= {[styles.textHeadline]}>Topkokkenes Guide til De Bedste Spisesteder i København</Text>
                    <Text style={[styles.greySmall]}>Last Updated: 10.01.85</Text>
                </TouchableOpacity>

            </View>
);
    }
}

export default ListsScreen;