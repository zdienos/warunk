import { View, StyleSheet, Text, TextInput } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar, Button, Subheader } from 'react-native-material-ui';
import Container from '../components/Container';
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

     
    }

    handleSave(){
       
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
