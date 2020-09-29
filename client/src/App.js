import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './App.css';
<<<<<<< HEAD
import {Guides,Home} from './components/pages'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'

=======
import {Guides,Home,LogIn,SingUp} from './components/pages'
>>>>>>> origin/master
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
<<<<<<< HEAD
            <Route path='/SignUp' exact component={SignUp} />
            <Route path='/Login' exact component={Login} />

=======
            <Route path='/signUp' exact component={SingUp} />
            <Route path='/login' exact component={LogIn} />
>>>>>>> origin/master
          </Switch>
        </Router>
      </>
    );
  }
};
export default App;
