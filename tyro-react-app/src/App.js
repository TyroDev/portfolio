import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components:
import Navbar from "./components/Navbar";

// Pages:
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

import Credits from "./components/Credits";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
        <Logo />
        <Credits />
      </div>
    );
  }
}

export default App;
