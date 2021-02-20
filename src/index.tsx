import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Home from 'screens/Home';

import store from 'store';

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
