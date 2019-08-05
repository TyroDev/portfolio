import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute";
import axios from "axios";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

// Components:
import Navbar from "./components/layout/Navbar";
import Logo from "./components/layout/Logo";
import Credits from "./components/layout/Credits";

// Pages:
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import user from './pages/user';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

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
      secondary: "Quicksand"
    }
  }
});

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <Route exact path="/users/:handle" component={user} />
                <Route exact path="/users/:handle/post/:postId" component={user} />
              </Switch>
            </div>
          </Router>
          <Logo />
          <Credits />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
