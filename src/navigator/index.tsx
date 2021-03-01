import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Stacks
import Home from 'screens/Home';

// type
// 이해하는 바로, 해당 라우팅시 필요한 파라미터의 타입을 미리 정의 하는 것 같다.
type StackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
