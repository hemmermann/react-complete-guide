import React from 'react';

const Person = (props) => {
    return (
        <div>
          <p>
            I`m a {props.name} my age is {props.age} !
          </p>
          <p>{props.children}</p>
        </div>
      );
}
export default Person;