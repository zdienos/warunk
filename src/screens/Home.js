<script src="http://localhost:8097"></script>
import { View, StyleSheet, Text , Image, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Realm from 'realm';
import { Dimensions } from 'react-native'

import { Avatar, Icon, Card, ListItem, Toolbar, Button, Subheader, Divider } from 'react-native-material-ui';
import Container from '../components/Container';
import { WarunkSchema } from '../components/RealmSchema';
import { getInisial } from '../components/Helper';

class Home extends Component {
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

    }

    componentWillMount() {


    }

    render() {
        const date = new Date().toString();
        const dimensions = Dimensions.get('window');
        const imageHeight = Math.round(dimensions.width * 1 / 1.505);
        const imageWidth = dimensions.width;
        return (
            <Container>
                <Toolbar
                    centerElement="Warunk"
                    rightElement="crop-free"
                    onRightElementPress={() => this.props.navigation.navigate('scanner')}
                />
                <ScrollView>
                    <Card style={styles.headerImageContainer}>
                        <View style={styles.headerImageContainer}>
                            <Image source={require('../gunung.jpg')} resizeMode="contain" style={{ height: imageHeight, width: imageWidth }}/>
                        </View>
                        <ListItem
                            leftElement={<Avatar text= {getInisial(this.state.warunkId.name)}  />}
                            centerElement={{
                                primaryText: this.state.warunkId.name,
                                secondaryText: '3 weeks ago',
                            }}
                        />
                    </Card>
                    <Card>

                        <ListItem
                            leftElement="shopping-cart"
                            centerElement={{
                                primaryText: 'Transaksi',
                            }}
                            onPress={() => this.props.navigation.navigate('transaction')}
                        />
                        <Divider/>
                        <ListItem
                            leftElement="local-offer"
                            centerElement={{
                                primaryText: 'Daftar Barang',
                                secondaryText: '28.018 Items',
                            }}
                            onPress={() => this.props.navigation.navigate('products')}
                        />
                        <Divider/>
                        <ListItem
                            leftElement="settings"
                            centerElement={{
                                primaryText: 'Pengaturan',
                            }}
                            onPress={() => this.props.navigation.navigate('settings')}
                        />
                    </Card>
                </ScrollView>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    menuContainer:{
        display: 'flex',
        flexDirection: 'row',
    },
    menuItem:{
       flex:1,
       flexDirection: 'column',
    },
    menuInner: {
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    headerImage:{
          width: '100%'
    },
    headerImageContainer:{
        backgroundColor: 'blue',
        flex: 1
    }
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

Home.propTypes = propTypes;

function mapStateToProps(state) {
    const { settings } = state;
    return {
        settings
    };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
