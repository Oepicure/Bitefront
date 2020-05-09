import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles.js'

class RestaurantReviews extends Component {
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
                        <View style={{height: 3, backgroundColor: 'black', marginStart: 3, marginEnd: 3} }></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.container, styles.center, styles.paddingSmall]} onPress={()=> this.props.navigation.navigate('RestaurantFind')}>
                        <Text style={[styles.textTab]}>Find</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.padding]}>
                    <Text style={[styles.textHeadline, styles.bold, {color: 'grey'}]}>Reviews</Text>
                </View>

                <View style={[styles.row]}>
                    <View style={[styles.container]}>
                        <View>
                            <Image style={[styles.listphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-pH5TzoFNCeS3pSlEbGTNNcAoVBW2Nbztyo42HJD_RRID7qHA&usqp=CAU'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Redaktionen</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>           
                    </View>
                    <View style={[styles.container]}>
                        <View>
                            <Image style={[styles.listphoto]} source={{uri: 'https://blog.dinnerbooking.com/wp-content/uploads/2019/06/Tivoli-Gemyses-Credit-Unknown1.jpg'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Redaktionen</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>           
                    </View>
                    <View style={[styles.container]}>
                        <View>
                            <Image style={[styles.listphoto]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHVJUsSn7K0SGpBPuJaMJPcb6p5HkjOE57fmPaUOH3mPL8khtu&usqp=CAU'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Redaktionen</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.padding]}>
                    <Text style={[styles.textHeadline, styles.bold, {color: 'grey'}]}>Liked by</Text>
                </View>


                <View style={[styles.row, styles.center]}>
                    <View style={[styles.container]}>
                        <View style={[styles.row, styles.center]}>
                            <Image style={[styles.listPhotoRound]} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDk1X9tySEZtaSrImQ6tP2woHw57OrU7ClD1InCqbER4t2A-bK&usqp=CAU'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Foodblogger</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>           
                    </View>
                    <View style={[styles.container]}>
                        <View style={[styles.row, styles.center]}>
                            <Image style={[styles.listPhotoRound]} source={{uri: 'data:image/jpeg;base64,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'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Chef</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>
                    </View>              
                    <View style={[styles.container]}>
                        <View style={[styles.row, styles.center]}>
                            <Image style={[styles.listPhotoRound]} source={{uri: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1567130935051-O1QWVGD110ZH3958B8PM/ke17ZwdGBToddI8pDm48kNO2SymwcR0CNt03aX8zdCd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmyh-8_5GJNvrfz4o4yOfLS6zQbzUiTKHw9oGJVKerm66NTpMeMsHjVpXC93GFBavO/IMG_0100+copy.jpg'}}/>
                        </View>
                        <View style={[styles.padding]}>
                            <Text style={[styles.grey]}>Af Foodie</Text>
                            <Text style={[styles.italic, {fontSize: 10, paddingBottom: 10, paddingTop:5}]}>"Dette er en lang beskrivelse. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud..."</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default RestaurantReviews;