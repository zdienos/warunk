import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import {Home} from './screens/Home';
import BarcodeScanner from './screens/BarcodeScanner';
import Products from './screens/Products';
import Transaction from './screens/Transaction';
import Settings from './screens/Settings';

const AppNavigator = StackNavigator({
	splash: { screen: SplashScreen},
    home: { screen: Home },
    products: { screen: Products },
    transaction: { screen: Transaction },
    settings: { screen: Settings },
    scanner: { screen: BarcodeScanner },
}, {
    headerMode: 'none',
    initialRouteName: 'splash'
});

export default AppNavigator;