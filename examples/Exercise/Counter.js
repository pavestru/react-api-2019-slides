import React from 'react';
import { StyledButton } from './StyledButton';

export class Counter extends React.Component {
  state = {
    counter: 0
  }
  handleDec = () => {this.setState( state => ({ counter: state.counter - 1 }))}
  handleInc = () => {this.setState( state => ({ counter: state.counter + 1 }))}
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <StyledButton label="-1" onClick={this.handleDec} />
        <StyledButton label="+1" onClick={this.handleInc} />
      </div>
    );
  }
}
