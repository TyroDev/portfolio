import React from "react";
import "./App.css";
import "./Logo.css";

function App() {
  return (
    <div className="App">
      <div id="logo" class="animated fadeIn">
        TYR<img src={require('./O.png')} id="O" alt="logo" />
      </div>
    </div>
  );
}

export default App;
