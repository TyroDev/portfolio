import React, { Component } from "react";
import "../Logo.css";

export class Logo extends Component {
  render() {
    return (
      <div id="logo" class="animated fadeIn">
        TYR<img src={require("../O.png")} id="O" alt="logo" />
      </div>
    );
  }
}

export default Logo;
