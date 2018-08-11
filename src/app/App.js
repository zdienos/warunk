import React, { Component } from 'react';
import { NativeModules, StatusBar, View } from 'react-native';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import Container from '../components';
import MainTabNavigator from '../routes';

const UIManager = NativeModules.UIManager;

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.grey500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class App extends Component {
    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }
    static renderScene(route, navigator) {
        return (
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <View style={{ backgroundColor: COLOR.grey500, height: 24 }} />
                <route.Page
                    route={route}
                    navigator={navigator}
                />
            </Container>
        );
    }
    componentWillMount() {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={getTheme(uiTheme)}>
                <MainTabNavigator ref={(nav) => { this.navigator = nav; }} />
                {/* <Navigator
                    configureScene={App.configureScene}
                    initialRoute={routes.home}
                    ref={this.onNavigatorRef}
                    renderScene={App.renderScene}
                /> */}
            </ThemeContext.Provider>
        );
    }
}

export default App;
