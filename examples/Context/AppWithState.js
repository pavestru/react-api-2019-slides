import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0
  }
  handleClick = () => {
    this.setState({counter: this.state.counter + this.props.increment})
  }
  render() {
    return <button style={{ fontSize: 100 }} onClick={this.handleClick}>{this.state.counter}</button>
  }
}
