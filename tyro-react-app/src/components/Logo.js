import React, { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div id="logo" className="animated fadeIn">
        TYR<img src={require("../images/O.png")} id="O" alt="logo" />
      </div>
    );
  }
} 

export default Logo;
