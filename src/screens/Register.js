import { AppRegistry, View, StyleSheet, Text , Image, ScrollView, TextInput, Dimensions} from 'react-native';
import React, { Component } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import LabelInput from '../components/LabelInput';


import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Register extends Component {
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

                    <Text style={styles.register}>Register</Text>
                </View>
                <View style={styles.random}>
                    <LabelInput label="NAMA LENGKAP" errorMessage="Nama harus diatas 2 karakter"/>
                    <LabelInput label="EMAIL" />
                    <LabelInput label="PASSWORD"/>
                    <LabelInput label="KONFIRMASI PASSWORD"/>

                    <Button btnText="SELANJUTNYA" style={styles.btn}/>
                    <View style={styles.registered}>
                        <Text style={styles.registeredChild}>Sudah mempunyai akun? </Text>
                        <Text style={styles.loginNow}>Login sekarang</Text>
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
    logo: {
        position: 'absolute',
        left: -10,
        top: 40,
        zIndex: 10
    },
    random: {
        marginTop: -32
    },
    register: {
        color: '#ffffff',
        fontSize: 40,
        position: 'absolute',
        top: 75,
        left: -10
    },
    registered: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        bottom: -30
    },
    registeredChild: {
        display: 'flex',
        textAlign: 'right'
    },
    loginNow: {
        color: '#2D54E1',
        fontWeight: 'bold'
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
        fontSize: 16,
        marginTop: 25
    }
});



const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Register.propTypes = propTypes;

export default Register
