import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
