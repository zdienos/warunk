import { AppRegistry, View, StyleSheet, Text , Image, ScrollView, TextInput} from 'react-native';
import React, { Component } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';


import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Register extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <LabelInput label="NAMA LENGKAP"/>
                <LabelInput label="EMAIL" />
                <LabelInput label="PASSWORD"/>
                <LabelInput label="KONFIRMASI PASSWORD"/>

                <Button btnText="SELANJUTNYA" style={styles.btn}/>
            </View>


    )}

}

const styles = StyleSheet.create({
const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgba(255,255,255,1)',
        flexDirection: 'column',
        flex: 1
    },

    btn: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 50,
        fontSize: 16
    }
});



const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Register.propTypes = propTypes;

export default Register
