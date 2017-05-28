import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <p className="App-intro">
          Navbar Here
        </p>
      </div>
    );
  }
}

export default App;
