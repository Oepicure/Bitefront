import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword } from '../actions/user'


class LoginScreen extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.container, styles.center]}>
                    <Text style={[styles.headerText]}>Login</Text>
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
                    <TouchableOpacity style={[styles.button, {marginTop:20}]} onPress={()=> this.props.navigation.navigate('Drawer')}>
                        <Text>Login</Text>
                    </TouchableOpacity>                    
                    <TouchableOpacity style={[{marginTop:20}]} onPress={()=> this.props.navigation.navigate('SignIn')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators({ updateEmail, updatePassword }, dispatch)
    )
  }
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(LoginScreen);