import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Zoro", age: 24 },
        { name: "Luffy", age: 20 },
        { name: "Sabo", age: 22 }
      ]
    };
    this.switchNameHandler = this.switchNameHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  switchNameHandler = newName => {
    this.setState({
      people: [
        { name: "Ace", age: 24 },
        { name: "Luffy", age: 20 },
        { name: "Sabo", age: 22 }
      ]
    });
  };

  nameChangeHandler = evt => {
    this.setState({
      people: [
        { name: "Zoro", age: 24 },
        { name: "Luffy", age: 20 },
        { name: evt.target.value, age: 22 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>we're good!</h1>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
        />
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
          change={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
