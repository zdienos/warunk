import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text>{this.props.btnText}</Text>
            </View>
        );
    }
}




export default Button;
