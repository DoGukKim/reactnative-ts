/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {observer} from 'mobx-react';
// import CountStore from 'stores/Count';

// declare const global: {HermesInternal: null | {}};

const App = observer(() => {
  // const {number, increase} = CountStore;
  return (
    <>
      <SafeAreaView>
        <View>
          {/* <Text onPress={() => increase()}>{count}</Text> */}
          <Text>똑똑한 개발자</Text>
        </View>
      </SafeAreaView>
    </>
  );
});

export default App;
