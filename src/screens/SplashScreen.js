import { View, StyleSheet, Text , Image } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Container from '../components/Container';
import { selectAppId, insertAppId } from '../databases/Schemas';
import realm from '../databases/Schemas';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          info:'App starting...'
        };
    }

    componentDidMount() {

        //some procesing
        this.setState({info: 'Loading some data...'})

        selectAppId().then((appId)=>{
            this.setState({info: appId});
        }).catch((error)=>{
            this.props.navigation.navigate('register');
        })

        // setTimeout(()=>this.props.navigation.navigate('home'),5000);
    }

    render() {
        
        return (
            <Container>
                <View style={styles.splashScreen}>
                    <View style={styles.imageContainer}>
                        <Image
                          style={styles.splashImage}
                          source={require('../web_hi_res_512.png')}
                        />
                    </View>
                    <View style={styles.splashInfo}>
                        <Text>{this.state.info}</Text>
                    </View>
                </View>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    splashScreen:{
        flex: 1,
    },
    imageContainer:{
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
    },
    splashImage:{
        width: 150,
        height: 150,
    },
    splashInfo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};


SplashScreen.propTypes = propTypes;

export default SplashScreen;
