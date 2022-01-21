import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="CounterWrapper">
        <h1>{this.state.count}</h1>
        <div>
          <button className="CounterBtn" onClick={this.increment}>
            Increment
          </button>
          <button className="CounterBtn" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
