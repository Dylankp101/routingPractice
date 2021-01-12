import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';
import Hello from './components/Hello';
import React from 'react';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">

    <Router>
          <Home path="/home"/>
          <Hello path=":word"/>

          <Number path=":num"/>
          <Color path=":word/:color/:bg"/>
    </Router>

    </div>
  );
}

export default App;
