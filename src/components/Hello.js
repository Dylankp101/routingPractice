import React from 'react';

const Hello = props => {
  return (
    <div className="App">
       <p>The word is: {props.word}</p>
    </div>
  );
}

export default Hello;