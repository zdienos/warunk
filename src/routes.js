import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import Register from './screens/Register';
import Home from './screens/Home';
import Login from './screens/Login';
import BarcodeScanner from './screens/BarcodeScanner';
import Products from './screens/Products';
import Transaction from './screens/Transaction';
import Settings from './screens/Settings';

const AppNavigator = StackNavigator({
	splash: { screen: SplashScreen},
	register: { screen: Register},
    home: { screen: Home },
    login: {screen: Login},
    products: { screen: Products },
    transaction: { screen: Transaction },
    settings: { screen: Settings },
    scanner: { screen: BarcodeScanner },
}, {
    headerMode: 'none',
    initialRouteName: 'register'
});

export default AppNavigator;