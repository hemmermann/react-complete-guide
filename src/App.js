import './App.css';

import React, { Component } from 'react'
import Person from './Person/Person'
class App extends Component {
  state ={
    persons: [
      {
        name: 'Max',
        age: 13
      },{
        name: 'Maxima',
        age: 43
      },{
        name: 'Regola',
        age: 34
      }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 41
        },{
          name: 'Maxima',
          age: 43
        },{
          name: 'Regola',
          age: 34
        },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am George</h1>
      <p>This is paragraph!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
          My hobbies: football
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}


export default App;
