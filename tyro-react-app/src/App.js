import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";

// Components:
import Navbar from "./components/Navbar";

// Pages:
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

import Credits from "./components/Credits";

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute
                exact
                path="/login"
                component={login}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path="/signup"
                component={signup}
                authenticated={authenticated}
              />
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
