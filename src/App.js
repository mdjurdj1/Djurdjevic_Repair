import React, { Component } from 'react';
import './App.css';

import Banner from './components/Banner'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navbar />
      </div>
    );
  }
}

export default App;
