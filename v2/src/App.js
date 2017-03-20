import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MemberInfo           from './screens/MemberInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={""} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MemberInfo />
      </div>
    );
  }
}

export default App;
