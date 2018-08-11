import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, Button, ActionButton, Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';

import { ProductsSchema } from '../components/RealmSchema';


class Products extends Component {
     constructor(props) {
        super(props);
        this.state = {};

        this.handleAdd = this.handleAdd.bind(this);
    }

    componentWillMount(){
        const now = new Date();
        // Realm.open({
        //   schema: [ProductsSchema],
        //   schemaVersion: 1,
        // }).then(realm => {
        //     let productsData = realm.objects('Products').filtered('id.@size > 0');
        //     if(productsData.length < 1){
        //         realm.write(() => {
        //           realm.create('Products', {
        //             barcode: '8998009010637',
        //             name:  'Ultra Milk 1000ml',
        //             buy_price: '15000',
        //             sell_price: '17000',
        //             unit: 'pcs',
        //             time_stamp: now,
        //         });
        //       });  
        //       console.log("Pengguna Baru");   
        //     }
        // });
    }

    handleAdd(){
        // Realm.open({
        //   schema: [ProductsSchema],
        //   schemaVersion: 1,
        // }).then(realm => {
        //   realm.write(() => {
        //     realm.create('Products', {
        //       barcode: '8998009010637',
        //       name:  'Ultra Milk 1000ml',
        //       buy_price: '15000',
        //       sell_price: '17000',
        //       unit: 'pcs',
        //       time_stamp: now,
        //     });
        //   });     
        // });
        console.log("add new product");
    }

    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="Products"
                    searchable={{
                      autoFocus: true,
                      placeholder: 'Cari...',
                    }}
                    onLeftElementPress={() => this.props.navigation.goBack(null)}
                />
                <Subheader text="Products Page" />
                <Card>
                    <ListItem
                        leftElement={<Avatar text="NW" />}
                        centerElement={{
                            primaryText: 'Nissin Wafers',
                            secondaryText: 'Rp. 25.000',
                        }}
                    />
                    <Divider/>
                </Card>
                <ActionButton onPress={() => this.props.navigation.navigate('scanner')}/>
            </Container>
        );
    }
}


const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Products.propTypes = propTypes;

export default Products;
