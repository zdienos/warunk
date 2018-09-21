import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.default}>{this.props.btnText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
    	color: 'rgba(255,255,255,1)'
    }


});


export default Button;
