import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, Button, ActionButton, Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';

class Transaction extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="Transaksi"
                />
                <Subheader text="No. Faktur" />
                <Card>
                    <ListItem
                        leftElement={<Avatar text="MR" />}
                        centerElement={{
                            primaryText: 'Menthy Rosyanci',
                            secondaryText: '3 weeks ago',
                        }}
                    />
                    <Divider/>
                </Card>
                <ActionButton onPress={() => this.props.navigation.navigate('scanner')}/>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Transaction.propTypes = propTypes;

export default Transaction;
