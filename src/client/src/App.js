import React, { Component } from 'react';
import List from './components/list';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (   
      <Provider store={store}>   
        <div>
          <List />
        </div>
      </Provider>
    )
  }
}

export default App;
