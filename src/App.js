import React, { Component } from 'react';
import './App.css';
import BatchedUpdates from './Demo/batchedUpdates';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BatchedUpdates />
      </div>
    );
  }
}

export default App;
