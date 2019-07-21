import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from './components/Logo';

// Pages:
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={home} />
        </Switch>
      </Router>

      <Logo />

    </div>
  );
}

export default App;
