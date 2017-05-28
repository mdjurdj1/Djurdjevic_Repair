import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {withRouter} from 'react-router'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import About from './containers/About'

const NavigationWithRouter = withRouter(Navbar)

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <Banner />
          <NavigationWithRouter />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
