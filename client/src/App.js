import React, { Component } from "react";
// import { Dropdown } from 'react-bootstrap';
import "./App.css";
import {
  Guides,
  Home,
  LogIn,
  SingUp,
  Myprofile,
  Georgia,
  Italy,
  Extreme,
  Policy
} from "./components/pages";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay);

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/guides/listGuides" exact component={Guides} />
            <Route path="/signUp" exact component={SingUp} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/guides/:id" exact component={Myprofile} />
            <Route path="/georgia" exact component={Georgia} />
            <Route path="/italy" exact component={Italy} />
            <Route path="/Extreme" exact component={Extreme} />
            <Route path='/policy' exact component={Policy}/>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
