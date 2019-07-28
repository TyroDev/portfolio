import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
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

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
