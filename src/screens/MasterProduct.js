import { View, StyleSheet, Text, TextInput, SearchBar, ScrollView, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, ActionButton,Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';
import Button from '../components/Button';


class MasterProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            hide: false
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
                    <Text>Stock Tersisa:</Text>
                    <Text style={styles.qtyNum}>10</Text>
                </View>
            </View>
            )
        }


        return (
            <Container style={styles.container}>

                <View>
                    <Image source={require('../img/shape-dashboard.png')} resizeMode="contain" style={styles.shape}/>
                    <View style={styles.dataBarang}>
                        <Image source={require('../img/arrow-left.png')} style={styles.arrowLeft} />
                        <Text style={styles.dataBarangLabel}>Data Barang</Text>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <Image source={require('../img/ic_search_grey.png')} style={styles.iconSearch}/>
                    <TextInput maxLength= {40} placeholder="Cari Barang" underlineColorAndroid='rgba(0,0,0,0)'style={styles.textInput}/>
                </View>
                <View style={styles.blocker}>
                </View>
                <ScrollView style={styles.listContainerWrap}>
                    <View style={styles.listContainer}>
                        {listCard}
                    </View>
                </ScrollView>
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
        position: 'relative',
        backgroundColor: '#fff'
    },
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    searchContainer: {
        position: 'relative',
        marginTop: 10,
        width: fullWidth * 0.8,
        marginLeft: fullWidth * 0.08,
        paddingTop: 5,
        borderRadius: 4,
        zIndex: 100,
        backgroundColor: '#fff'
    },
    iconSearch: {
        position: 'absolute',
        width: 13,
        height: 13,
        zIndex: 30,
        top: 18,
        left: 10
    },
    blocker: {
        marginTop: -30,
        zIndex: 1,
        height: 50,
        backgroundColor: '#ffffff'
    },
    textInput:{
        borderRadius: 4,
        borderColor: 'rgba(0,0,0,0.15)',
        borderWidth: 1,
        backgroundColor: 'white',
        textAlignVertical: 'top',
        paddingTop: 14,
        paddingRight: 8,
        paddingLeft: 28,
        paddingBottom: 8,
        fontSize: 16,
        marginTop: -5,
    },
    shape: {
        position: 'absolute',
        left:0,
        top: -80,
        height: imageHeight,
        width: imageWidth,
        backgroundColor: '#ffffff'
    },

    dataBarang: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    dataBarangLabel: {
        fontSize: 22,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 15
    },
    arrowLeft: {
        width: 30,
        height: 18,
        marginRight: 20,
        top: 26,
        position: 'absolute',
        left: fullWidth * 0.1
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
        backgroundColor: '#ffffff'
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
        right: 0,
        textAlign: 'right'
    },
    qtyNum: {
        textAlign: 'right'
    },
    name: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: 16
    },
    writeWrapper: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 35,
        width: 50,
        height: 50,
        bottom: 180,
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
        bottom: 120,
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
        bottom: 50,
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

MasterProduct.propTypes = propTypes;

export default MasterProduct;