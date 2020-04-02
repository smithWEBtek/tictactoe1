import React, { Component } from 'react';

class Square extends Component {
  state = {
    token: ''
  }
  render() {
    return (
      <button 
        className="square" 
        token={this.props.token}
        // id={this.props.id}
        >
        <h1>{this.props.token}</h1>
      </button>
    );
  }
}

export default Square;
