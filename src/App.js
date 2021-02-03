import "./App.css";

import React, { useState } from "react";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonState] = useState({
    count: 0,
    persons: [
      {
        name: "Max",
        age: 13,
      },
      {
        name: "Maxima",
        age: 43,
      },
      {
        name: "Regola",
        age: 34,
      },
    ],
    otherState: "other value",
  })

  const switchNameHandler = () => {
    console.log("Was clicked!");
    setPersonState({
      persons: [
        {
          name: "Maximilian",
          age: 41,
        },
        {
          name: "Maxima",
          age: 43,
        },
        {
          name: "Regola",
          age: 34,
        },
      ],
    });
  };

  const [otherState, setOtherState] = useState('string');

  console.log(personState,otherState);

  return (
    <div className="App">
      <h1>Hi I am George</h1>
      <p>This is paragraph!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>
        My hobbies: football
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
