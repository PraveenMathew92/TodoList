import React, { Component } from 'react';
import './App.css';

import Form from './containers/Form';
import Display from './containers/Display';

class App extends Component {

  render() {
    return (
      <div>
        <Form />
        <Display />
      </div>
    );
  }
}

export default App;
