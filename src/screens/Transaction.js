import { View, StyleSheet, Text, ScrollView, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, ActionButton,Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';
import Button from '../components/Button';


class Transaction extends Component {
    constructor(props){
        super(props);
        this.state = {
            hide: true
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            hide: !this.state.hide
        });
    }
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
                <ScrollView style={styles.listContainerWrap}>
                    <View style={styles.listContainer}>
                        {listCard}
                    </View>
                </ScrollView>

                <View style={styles.btnContainer}>
                    <Button btnText="BAYAR SEKARANG" style={styles.btn}/>
                </View>

                <View>
                    {this.state.hide ?
                        <View style={styles.writeWrapper}>
                            <Image source={require('../img/write.png')} resizeMode="contain" style={styles.writeIcon}/>
                        </View> : null
                    }
                    {this.state.hide ?
                        <View style={styles.barcodeWrapper}>
                            <Image source={require('../img/barcode.png')} resizeMode="contain" style={styles.barcodeIcon}/>
                        </View> : null
                    }
                    <TouchableOpacity onPress={this.toggle}  style={styles.closeWrapper}>
                        <View>
                            {this.state.hide ?
                                <Image source={require('../img/close.png')} resizeMode="contain" style={styles.closeIcon}/>
                                :
                                <Image source={require('../img/close.png')} resizeMode="contain" style={styles.closeIcons}/>
                            }
                        </View>
                    </TouchableOpacity>

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
        backgroundColor: '#2d54e1'
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
    listContainerWrap: {
        marginTop: imageHeight - 100
    },
    listContainer: {
        display: 'flex',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 25,
        paddingBottom: 25,
        marginBottom: 50
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
        paddingTop: 15,
        paddingBottom: 15,
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
        left: 0
    },
    writeWrapper: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 35,
        width: 50,
        height: 50,
        bottom: 135,
        borderRadius: 60,
        backgroundColor: '#3ED538'
    },
    writeIcon: {
        width: 30,
        height: 30,
    },
    barcodeWrapper: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 35,
        width: 50,
        height: 50,
        bottom: 75,
        padding: 10,
        borderRadius: 60,
        backgroundColor: '#333'
    },
    barcodeIcon: {
        width: 30,
        height: 30,
    },
    closeWrapper: {
        position: 'absolute',
        right: 30,
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 5,
        borderRadius: 60,
        backgroundColor: '#EACA4F'
    },
    closeIcon: {
        width: 30,
        height: 30,
    },
    closeIcons: {
        width: 30,
        height: 30,
        transform: [{ rotate: '45deg'}]
    }



});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Transaction.propTypes = propTypes;

export default Transaction;
