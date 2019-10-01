import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import ItemListContainer from '@containers/ItemListContainer';
//import FilterBarContainer from '@containers/FilterBarContainer';
//import ItemModalContainer from '@containers/ItemModalContainer';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <header className="App-header">
          <h1>Trollskull Manor Magic Items</h1>
          <ItemListContainer/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
