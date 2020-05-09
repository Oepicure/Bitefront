import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername, updateOccupation, updateUserLocation, updateAboutUser } from '../actions/user'


class SignupScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.container, styles.center]}>
                    <Text style={[styles.headerText]}>Signup</Text>
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updateEmail(input)}
                            placeholder='Email'
                    />
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updatePassword(input)}
                            placeholder='Password'
                            secureTextEntry={true}
                    />
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updateUsername(input)}
                            placeholder='Username'
                    />
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updateOccupation(input)}
                            placeholder='Occupation'
                    />
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updateUserLocation(input)}
                            placeholder='My Location'
                    />
                    <TextInput
                            style={[styles.textInput]}
                            value={this.props.user}
                            onChangeText={input => this.props.updateAboutUser(input)}
                            placeholder='About Me'
                    />

                    <TouchableOpacity style={[styles.button, {marginTop:20}]} onPress={()=> this.props.navigation.navigate('Drawer')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{marginTop:20}]} onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text>Login</Text>
                    </TouchableOpacity>                
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators({ updateEmail, updatePassword, updateUsername, updateOccupation, updateUserLocation, updateAboutUser }, dispatch)
    )
  }
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(SignupScreen);

