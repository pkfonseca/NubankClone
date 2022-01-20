import 'react-native-gesture-handler';
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Router from './router';

AppRegistry.registerComponent(appName, () => Router);
