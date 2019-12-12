import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import Home from '~/pages/Home';
import GlobalStyles from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}

export default App;
