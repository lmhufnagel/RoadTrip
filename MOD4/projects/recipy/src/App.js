import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipyContainer from './containers/RecipyContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipyContainer />
      </div>
    );
  }
}

export default App;
