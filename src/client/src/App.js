import React from 'react';
import Header from './components/header';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Header/>
      </div>
    </Provider>
  );
}

export default App;
