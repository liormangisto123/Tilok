import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './App.css';
import {Guides,Home} from './components/pages'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>

            <Route path='/' exact component={Home} />
            <Route path='/guides/listGuides' exact component={Guides} />
          </Switch>
        </Router>
      </>
    );
  }
};
export default App;