import React, { Component } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.addCount = this.addCount.bind(this);
    this.setTimeoutSetState = this.setTimeoutSetState.bind(this);
    this.batchedSetState = this.batchedSetState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  batchedSetState() {
    console.log('batchedSetState ---start');
    setTimeout(() => {
      unstable_batchedUpdates(this.addCount);
    });
    console.log('batchedSetState ---end');
  }

  setTimeoutSetState() {
    console.log('setTimeoutSetState ---start');
    setTimeout(this.addCount);
    console.log('setTimeoutSetState ---end');
  }

  handleClick() {
    console.log('Normal setState ---start');
    this.addCount();
    console.log('Normal setState ---end');
  }

  addCount() {
    this.setState({ count: 1 });
    console.log(this.state.count);
    this.setState({ count: 2 });
    console.log(this.state.count);
    this.setState({ count: 3 });
    console.log(this.state.count);
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>{count}</h3>
        <div>
          <button onClick={this.addCount}>Normal setState</button>
          <button onClick={this.setTimeoutSetState}>setTimeoutSetState</button>
          <button onClick={this.batchedSetState}>batchedSetState</button>
        </div>
        <div>
          <button onClick={this.reset}>Reset state</button>
        </div>
      </div>
    );
  }
}

export default App;
