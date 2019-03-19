import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // can pass a variable to DOM
    const message = `Hello from Ironhack`
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      {/* passing variable to DOM with {} */}
        <h1>{message}</h1>
      </div>
    );
  }
}

export default App;
