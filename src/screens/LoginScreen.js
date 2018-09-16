<script src="http://localhost:8097"></script>
import { AppRegistry, View, StyleSheet, Text , Image, ScrollView, TextInput} from 'react-native';
import React, { Component } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';


import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.login}>Login</Text>
                </View>
                <View style={styles.general}>
                    <LabelInput label="EMAIL"/>
                    <LabelInput label="PASSWORD"/>
                    <Text style={styles.forgotPass}>Lupa password?</Text>
                    <Button btnText="LOGIN" style={styles.btn}/>
                </View>

            </View>


    )}

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#ffffff',
                flexDirection: 'column',
        flex: 1
    },
    general: {
        display: 'flex',
        marginTop: 100
    },
    login: {
        color: '#ffffff',
        fontSize: 40
    },
    btn: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'rgba(255,255,255,1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 40,
        fontSize: 16
    },
    forgotPass: {
        display: 'flex',
        textAlign: 'right',
        marginTop: 10
    }

});


export { Login as Login };
