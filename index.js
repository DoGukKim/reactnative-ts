/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// 스토리 북 런 할 시엔 상단 코드 주석 후 하단 의 코드 살리면 된다.
// export { default } from './storybook';