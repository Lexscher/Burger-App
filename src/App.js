import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>we're good!</h1>
        <Person />
      </div>
    );
  }
}

export default App;
