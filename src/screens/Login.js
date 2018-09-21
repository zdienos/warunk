<script src="http://localhost:8097"></script>
import { AppRegistry, View, StyleSheet, Text , Image, ScrollView, TextInput, Dimensions} from 'react-native';
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
        const dimensions = Dimensions.get('window');
        const imageHeight = Math.round(dimensions.width * 1 / 1.625);
        const imageWidth = Math.round(dimensions.width * 0.7);
        const logoWidth = Math.round(dimensions.width * 0.2);
        const logoHeight = Math.round(dimensions.width * 1 / 18);
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../img/logo_2x.png')} style={[styles.logo,{ height: logoHeight, width: logoWidth }]}/>
                    <Image source={require('../img/shape.png')} resizeMode="contain" style={[styles.shape,{ height: imageHeight, width: imageWidth }]}/>

                    <Text style={styles.login}>Login</Text>
                </View>
                <View style={styles.general}>
                    <LabelInput label="EMAIL" errorMessage="email salah"/>
                    <LabelInput label="PASSWORD"/>
                    <Text style={styles.forgotPass}>Lupa password?</Text>
                    <Button btnText="LOGIN" style={styles.btn}/>

                    <View style={styles.notRegistered}>
                        <Text style={styles.notRegisteredChild}>Belum punya akun? </Text>
                        <Text style={styles.makeAccount}>Buat akun sekarang</Text>
                    </View>

                </View>

            </View>


    )}

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: 35,
        paddingRight: 35,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        flex: 1
    },
    general: {
        display: 'flex',
        marginTop: 60
    },
    notRegistered: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        bottom: -30
    },
    notRegisteredChild: {
        display: 'flex',
        textAlign: 'right'
    },
    makeAccount: {
        color: '#2D54E1',
        fontWeight: 'bold'
    },
    login: {
        color: '#ffffff',
        fontSize: 40,
        position: 'absolute',
        top: 75,
        left: -10
    },
    logo: {
        position: 'absolute',
        left: -10,
        top: 40,
        zIndex: 10,
    },
    shape : {
        zIndex: 0,
        marginTop: -40,
        marginLeft: -35
    },
    btn: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'rgba(255,255,255,1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 40,
        fontSize: 16
    },
    forgotPass: {
        display: 'flex',
        textAlign: 'right',
        marginTop: 20
    },
    headerImage:{
      width: '100%'
    },
    headerImageContainer:{
        backgroundColor: 'blue',
        flex: 1
    },
    errorMessage: {
        color: '#ffffff',

    }

});


const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Login.propTypes = propTypes;

export default Login
