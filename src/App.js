import "./App.css";

import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Maxxxx",
        age: 13,
      },
      {
        name: "Maximaa",
        age: 43,
      },
      {
        name: "Regola",
        age: 34,
      },
    ],
  };

  switchNameHandler = (name) => {
    console.log("Was clicked!");
    this.setState({
      persons: [
        {
          name: name,
          age: 41,
        },
        {
          name: "Maximal",
          age: 43,
        },
        {
          name: "Resopa",
          age: 34,
        },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "decimus",
          age: 41,
        },
        {
          name: event.target.value,
          age: 32,
        },
        {
          name: "Regola",
          age: 34,
        },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am George</h1>
        <p>This is paragraph!</p>
        <button onClick={this.switchNameHandler.bind(this,'Maximal!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}
        >
          My hobbies: football
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={() => this.switchNameHandler.bind(this, 'Maximus!')}
        />
      </div>
    );
  }
}

export default App;
