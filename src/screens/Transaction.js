import { View, StyleSheet, Text, ScrollView, Dimensions, Image} from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, ActionButton,Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';
import Button from '../components/Button';


class Transaction extends Component {
    render() {

        var listCard = [];
        for(let i = 0; i < 25; i++) {
            listCard.push(
            <View key={i} style={styles.listCard}>
                <Text style={styles.name}>Nama barang</Text>
                <View style={styles.price}><Text style={styles.priceTag}>Rp.1000</Text><Text style={styles.items}>/items</Text></View>
                <View style={styles.qty}>
                    <Text>Qty</Text>
                    <Text>10</Text>
                </View>
            </View>
            )
        }


        return (
            <Container style={styles.container}>
                <Toolbar
                    style={styles.toolbar}
                    leftElement="arrow-back"
                    centerElement="Transaksi"
                />
                <View>
                    <Image source={require('../img/shape-dashboard.png')} resizeMode="contain" style={styles.shape}/>
                    <View style={styles.invContainer}>
                        <Text style={styles.total}>Total</Text>
                        <Text style={styles.totalPrice}>Rp. 124.500</Text>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>21 Jan, 2018</Text>
                            <Text style={styles.inv}>INV12345678</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.listContainer}>
                    {listCard}
                </ScrollView>
                <View style={styles.btnContainer}>
                    <Button btnText="BAYAR SEKARANG" style={styles.btn}/>
                    <Text style={styles.actionBtn}>Holla</Text>
                </View>

            </Container>
        );
    }
}


var fullWidth = Dimensions.get('window').width;
const imageHeight = Math.round(fullWidth * 1 / 2.21);
const imageWidth = fullWidth;
const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    toolbar: {
        backgroundColor: 'rgba(255,255,255,1)'
    },
    shape: {
        position: 'absolute',
        left:0,
        top: 0,
        height: imageHeight,
        width: imageWidth
    },
    invContainer: {
        paddingTop: 10,
        paddingLeft: 35
    },
    total: {
        color: '#ffffff',
        marginBottom: 15
    },
    totalPrice: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    date: {
        color: '#ffffff',
    },
    inv: {
        position: 'absolute',
        right: 35,
        color: '#fff'
    },
    listContainer: {
        display: 'flex',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 25,
        paddingBottom: 45,
        marginTop: imageHeight - 100
    },
    listCard: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    price: {
        display: 'flex',
        flexDirection: 'row'
    },
    priceTag: {
        fontWeight: 'bold',
        color: '#EACA4F'
    },
    items: {
        color:'rgba(0,0,0,0.3)'
    },
    qty: {
        position: 'absolute',
        right: 0
    },
    name: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: 16
    },
    btnContainer: {
        display: 'flex',
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        width: fullWidth,
        bottom: 0
    },
    btn: {
        color: 'rgba(255,255,255,1)',
        backgroundColor: '#333',
        width: 200,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        marginLeft: (fullWidth/2 - 100),
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4
    },
    actionBtn: {
        position: 'absolute',
        marginLeft: (fullWidth/2 + 50),
        top: 20
    }
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Transaction.propTypes = propTypes;

export default Transaction;
