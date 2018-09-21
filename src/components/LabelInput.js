import { View, StyleSheet, Text, TextInput } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class LabelInput extends Component {
    render() {
        return (
                <View>
                    <Text style={styles.text}>
                        {this.props.label}
                    </Text>
                    <TextInput
                    {...this.props}
                    editable = {true}
                    maxLength = {40}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    style={styles.textInput}
                    />
                    <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20
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
    errorMessage: {
        position: 'absolute',
        bottom: -16,
        fontSize: 12,
        color: '#f4424b'
    }

});



export default LabelInput;
