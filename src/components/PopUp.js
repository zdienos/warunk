import { Text, View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import React, { Component } from 'react';

import { Avatar, Card, ListItem, Toolbar, Button, ActionButton, Subheader, Divider } from 'react-native-material-ui';

import { PropTypes } from 'prop-types';

class PopUp extends Component {
    render() {
        const { isVisible, handleOnClose, handleOnSubmit, data } = this.props;
        return (
            <View style={styles.container}>
                <Modal 
                    isVisible={isVisible}
                    onBackdropPress={handleOnClose}
                >
                  <Card>
                    <Text>{data}</Text>
                    <Text>nama barang</Text>
                    <Text>harga</Text>
                    <Divider/>

                    <View style={styles.disFlex}>
                         <View style={styles.firstBtn}>
                            <Text style={styles.textCenter}>Close</Text>
                         </View>
                         <View style={styles.secondBtn}>
                            <Text style={styles.textCenter}>Ok</Text> 
                         </View>
                    </View>
                  
                  </Card>
                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center"
    },
    disFlex: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    firstBtn: {
        borderRightWidth: 1,
        flexGrow: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
    },
    secondBtn: {
       // borderLeftWidth: 1,
        flexGrow: 1,
       // borderStyle: 'solid',
       // borderColor: 'rgba(244, 66, 98, 1)',
       alignItems: 'center'
    }
    ,
    textCenter: {
        alignItems: 'center'
    }
});

const propTypes = {
    data: PropTypes.node.isRequired,
};

PopUp.propTypes = propTypes;

export default PopUp;