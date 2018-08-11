import { View, StyleSheet, Text, TextInput, Vibration, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { RNCamera } from 'react-native-camera';

import { Avatar, Card, ListItem, Toolbar, Button, Subheader, Dialog, DialogDefaultActions, ActionButton } from 'react-native-material-ui';
import Container from '../components/Container';
import PopUp from '../components/PopUp';

class BarcodeScanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanned:'',
            isFlashOn: false,
            popupVisible:true
        };
        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.handlePopupSubmit = this.handlePopupSubmit.bind(this);
    }

    handleBarcode(data){
        if(this.state.scanned == ''){
            //dispatch product code
            this.setState({isFlashOn: false, scanned:data, popupVisible: true});    
        }
    }

    handlePopupClose(){
        this.setState({popupVisible:false, scanned:''});
    }

    handlePopupSubmit(){
        this.setState({popupVisible:false, scanned:''});
        console.log("submit your payload");
    }

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="BarcodeScanner"
                    rightElement={ this.state.isFlashOn ? "flash-off" : "flash-on" }
                    onLeftElementPress={() => this.props.navigation.goBack(null)}
                    onRightElementPress={() => this.setState({isFlashOn:!this.state.isFlashOn})}
                />
                <RNCamera
                    ref={ref => {
                      this.camera = ref;
                    }}
                    style = {styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={ this.state.isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    onBarCodeRead={this._handleBarCodeRead}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={styles.finder}>
                    <View style={styles.box1} />
                    <View style={styles.box2} />
                    <View style={styles.box3} />
                    <View style={styles.box4} />
                </View>

                <View style={styles.wrap2}>
                    <View style={styles.wrap1}>
                        <TextInput
                            inlineImageLeft='people'
                            placeholder='Kode Barang'
                            onChangeText={(text) => this.setState({scanned:text})}
                            value={this.state.scanned}
                            style={styles.codeInput}
                            underlineColorAndroid= 'rgba(255,255,255,1)'
                        />
                    </View>
                </View>
                <PopUp isVisible={this.state.popupVisible} handleOnClose={this.handlePopupClose} handleOnSubmit={this.handlePopupSubmit} data={this.state.scanned}/> 
            </Container>
        );

    }

    _handleBarCodeRead = ({ type, data }) => {
        this.handleBarcode(data);
    } 
}

const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },

    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    finder: {
        flex: 0,
        top: 50,
        right: 0,
        bottom: 0,
        left: 0,
        position:'absolute',
        alignSelf: 'center',
        borderColor: 'rgba(0,0,0,0.6)',
        borderStyle: 'solid',
        borderTopWidth: 175,
        borderRightWidth: 20,
        borderBottomWidth: 175,
        borderLeftWidth: 20
    },
    box1: {
        position: 'absolute',
        borderColor: 'rgba(255, 255, 255, 1)',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        top: 0,
        left: 0,
        width: 20,
        height: 20
    },
    box2: {
       position: 'absolute',
       borderColor: 'rgba(255, 255, 255, 1)',
       borderTopWidth: 2,
       borderRightWidth: 2,
       top: 0,
       right: 0,
       width: 20,
       height: 20 
    },
    box3: {
       position: 'absolute',
       borderColor: 'rgba(255, 255, 255, 1)',
       borderBottomWidth: 2,
       borderLeftWidth: 2,
       bottom: 0,
       left: 0,
       width: 20,
       height: 20 
    },
    box4: {
       position: 'absolute',
       borderColor: 'rgba(255, 255, 255, 1)',
       borderBottomWidth: 2,
       borderRightWidth: 2,
       bottom: 0,
       right: 0,
       width: 20,
       height: 20 
    },
    wrap2: {
        justifyContent: 'center',
        flexDirection:'row',
        alignSelf:'center'
    },
    wrap1: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        borderRadius: 300,
        position:'absolute',
        bottom:50,
        paddingBottom: 5,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    codeInput:{
        width: 250,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    }

});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

BarcodeScanner.propTypes = propTypes;

export default BarcodeScanner;
