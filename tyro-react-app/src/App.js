import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Components:
import Navbar from "./components/Navbar";

// Pages:
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

import Credits from "./components/Credits";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fbfdf7",
      main: "#a6ce39",
      dark: "#425216",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffefec",
      main: "#ff6347",
      dark: "#b24531",
      contrastText: "#fff"
    }
  },
  typography: {
    userNextVariants: true,
    fontFamily: {
      primary: "Roboto",
      secondary: "Quicksand",
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
          <Credits />
        </div>
        <Logo />
      </MuiThemeProvider>
    );
  }
}

export default App;
