/**
 * @format
 */

import React from 'react';

// components
import {SafeAreaView, View} from 'react-native';
import {Text} from 'components/TypoGraphy';

// declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>디자인 시스템을 갖추기 위해 노력하는 개발자</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
