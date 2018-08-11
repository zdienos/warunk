import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const propTypes = {
    children: PropTypes.node.isRequired,
};

Container.propTypes = propTypes;

export default Container;
