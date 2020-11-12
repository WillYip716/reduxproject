import React, { Component } from 'react';
import List from './components/list';
import store from './store';
import { Provider } from 'react-redux';
import AddList from './components/addlist';
import EditItem from './components/edititem';


class App extends Component {

  render() {    
    return (   
      <Provider store={store}>   
        <div>
          <AddList/>
          <EditItem/>
          <List />
        </div>
      </Provider>
    )
  }
}

export default App;
