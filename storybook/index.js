import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import {name as appName} from '../app.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);


const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
