import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { store } from './components/Helper';

import App from './app/App';

export default function index() {
    class Root extends Component {
        render() {
            return (
            	<Provider store={store}>
                	<App />
                </Provider>
            );
        }
    }

    AppRegistry.registerComponent('warunk', () => Root);
}