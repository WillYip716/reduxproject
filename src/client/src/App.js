import React, { Component } from 'react';
import Header from './components/header';
import List from './components/list';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (   
      <Provider store={store}>   
        <div>
          <Header />
          <List />
        </div>
      </Provider>
    )
  }
}

export default App;
