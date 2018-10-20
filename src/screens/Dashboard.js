import { View, StyleSheet, Text, ScrollView, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, ActionButton,Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';
import Button from '../components/Button';


class Dashboard extends Component {
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

        return (
            <Container style={styles.container}>

                    <Image source={require('../img/logo_2x.png')} resizeMode="contain" style={styles.logo}/>
                    <Image source={require('../img/shape-dashboard.png')} resizeMode="contain" style={styles.shape}/>
                    <Text style={styles.welcome}>Selamat Pagi, Indra</Text>
                    <View style={styles.date}>
                        <Text style={styles.dates}>21 Jan, 2018</Text>
                        <Text style={styles.address}>Jl. Pasir Sireum, BLa bla</Text>
                    </View>
                    <ScrollView>
                    <View style={styles.superWrapper}>
                        <View style={styles.wrapper}>
                            <View style={styles.box}>
                                <Image source={require('../img/transaction.png')} resizeMode="contain" style={styles.icons}/>
                                <Text style={styles.title}>Transaksi</Text>
                                <Text style={styles.additional}>Belum ada transaksi</Text>
                            </View>
                            <View style={styles.box}>
                                <Image source={require('../img/data-barang.png')} resizeMode="contain" style={styles.icons}/>
                                <Text style={styles.title}>Data Barang</Text>
                                <Text style={styles.additional}>Belum ada barang</Text>
                            </View>
                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.box}>
                                <Image source={require('../img/data-customer.png')} resizeMode="contain" style={styles.icons}/>
                                <Text style={styles.title}>Data Pelanggan</Text>
                                <Text style={styles.additional}>Belum ada pelanggan</Text>
                            </View>
                            <View style={styles.box}>
                                <Image source={require('../img/seeting.png')} resizeMode="contain" style={styles.icons}/>
                                <Text style={styles.title}>Pengaturan</Text>
                            </View>

                        </View>
                        <View style={styles.wrapper}>
                            <View style={styles.box}>
                                <Image source={require('../img/logout.png')} resizeMode="contain" style={styles.icons}/>
                                <Text style={styles.title}>Keluar</Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>


            </Container>
        );
    }
}


var fullWidth = Dimensions.get('window').width;
const imageHeight = Math.round(fullWidth * 1 / 2.21);
const imageWidth = fullWidth;
const logoWidth = Math.round(fullWidth * 0.225);
const logoHeight = Math.round(fullWidth * 1 / 12.15);
const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    logo: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: logoWidth,
        height: logoHeight,
        zIndex: 20
    },
    shape: {
        position: 'absolute',
        top: -2,
        left: 0,
        height: imageHeight,
        width: imageWidth
    },
    welcome: {
        color: 'white',
        fontSize: 24,
        marginTop: 60,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    date: {
        color: 'white',
        flexDirection: 'row',
        position: 'relative',
        width: fullWidth,
        marginTop: 12,
        paddingLeft: 20,
        paddingRight: 20
    },
    dates: {
        color: 'white'
    },
    address: {
        color: 'white',
        position: 'absolute',
        right: 20
    },
    box: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 150,
        margin: 10,
        position: 'relative'
    },
    icons: {
        width: 60,
        height: 60,
        marginTop: -10
    },
    superWrapper: {
        marginTop: 30
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        bottom: 24,
        zIndex: 20,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },
    additional: {
        position: 'absolute',
        bottom: 8,
        fontSize: 12,
        color: 'rgba(0,0,0,0.3)'
    }


});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Dashboard.propTypes = propTypes;

export default Dashboard;
