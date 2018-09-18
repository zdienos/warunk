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
                <View>
                    <Text style={styles.text}>
                        NAMA LENGKAP
                    </Text>
                    <TextInput
                    {...this.props}
                    editable = {true}
                    maxLength = {40}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.textInput}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        EMAIL
                    </Text>
                    <TextInput
                    {...this.props}
                    editable = {true}
                    maxLength = {40}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.textInput}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        PASSWORD
                    </Text>
                    <TextInput
                    {...this.props}
                    editable = {true}
                    maxLength = {40}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.textInput}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        KONFIRMASI PASSWORD
                    </Text>
                    <TextInput
                    {...this.props}
                    editable = {true}
                    maxLength = {40}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.textInput}
                    />
                </View>

                <Button btnText="SELANJUTNYA" style={styles.btn}/>


            </View>


    )}

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        marginTop: 20
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
    },
    textInput:{
        borderRadius: 4,
        borderColor: 'rgba(0,0,0,0.15)',
        borderWidth: 1,
        textAlignVertical: 'top',
        paddingTop: 10,
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 4,
        fontSize: 16,
        marginTop: 5,
        padding: 0
    },

});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Register.propTypes = propTypes;

export default Register
