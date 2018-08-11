import { View, StyleSheet, Text, TextInput } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Realm from 'realm';

import { Avatar, Card, ListItem, Toolbar, Button, Subheader } from 'react-native-material-ui';
import Container from '../components/Container';
import { WarunkSchema } from '../components/RealmSchema';
import { getInisial } from '../components/Helper';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warunkId: {
                name: '',
                owner: '',
                phone: '',
                address: '',
                picture: '',
                location: '',
            }
        };

        this.handleSave = this.handleSave.bind(this);
    }

    componentWillMount() {

        // Realm.open({
        //   schema: [WarunkSchema],
        //   schemaVersion: 0,
        // }).then(realm => {
        //   let warunkData = realm.objects('Warunk').filtered('name.@size > 0');
        //   this.setState({
        //     warunkId:{
        //         name: warunkData[0].name,
        //         owner: warunkData[0].owner,
        //         phone: warunkData[0].phone,
        //         address: warunkData[0].address,
        //         picture: warunkData[0].picture,
        //         location: warunkData[0].location,
        //     }
        //   });
        // });
    }

    handleSave(){
        Realm.open({
          schema: [WarunkSchema]
        }).then(realm => {

          let warunkData = realm.objects('Warunk').filtered('name.@size > 0');
          
          realm.write(() => {
            warunkData[0].name = this.state.warunkId.name;
            warunkData[0].owner = this.state.warunkId.owner;
            warunkData[0].phone = this.state.warunkId.phone;
            warunkData[0].address = this.state.warunkId.address;
            warunkData[0].picture = this.state.warunkId.picture;
            warunkData[0].location = this.state.warunkId.location;
          });

        });
    }

    render() {
        const { warunkId } = this.state;
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="Pengaturan"
                    rightElement="done"
                    onRightElementPress={this.handleSave}
                    onLeftElementPress={() => this.props.navigation.goBack(null)}
                />
                <Subheader text="Settings Page" />
                <View style={styles.formContainer}>
                    <Text>Nama Warung :</Text>
                    <TextInput
                        inlineImageLeft='shop'
                        placeholder='Nama Warung'
                        onChangeText={(text) => this.setState({warunkId:{...warunkId, name:text}})}
                        value={this.state.warunkId.name}
                    />
                    <Text>Nama Pemilik :</Text>
                    <TextInput
                        inlineImageLeft='people'
                        placeholder='Nama Pemilik'
                        onChangeText={(text) => this.setState({warunkId:{...warunkId, owner:text}})}
                        value={this.state.warunkId.owner}
                    />
                    <Text>Telpon :</Text>
                    <TextInput
                        inlineImageLeft='phone'
                        placeholder='Telepon'
                        keyboardType='phone-pad'
                        onChangeText={(text) => this.setState({warunkId:{...warunkId, phone:text}})}
                        value={this.state.warunkId.phone}
                    />
                    <Text>Alamat :</Text>
                    <TextInput
                        inlineImageLeft='address'
                        placeholder='Alamat'
                        onChangeText={(text) => this.setState({warunkId:{...warunkId, address:text}})}
                        value={this.state.warunkId.address}
                    />
                </View>
                <Button raised primary text="Simpan" icon="done" onPress={this.handleSave}/>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    formContainer:{
        paddingHorizontal: 16,
        paddingBottom: 16,  
    }
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};


Settings.propTypes = propTypes;

export default Settings;
