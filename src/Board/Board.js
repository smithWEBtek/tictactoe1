import React, { Component } from 'react';
import Square from '../Square/Square';

class Board extends Component {
  state = {
    board: ["X","O","X","O","X","O","X","O","X"]
  }

  renderSquare(i) {
    return (
    <Square 
      // setToken={this.tokenHandler}
      token={i}
      // id={i}
    />);
  }
  
  tokenHandler = (event) => {
    // debugger;
    // console.log('TOKEN: ', event.target.value)
    // this.setState({
    //   board: ["K","","","","","","","","",]
    // })
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.board[0])}
          {this.renderSquare(this.state.board[1])}
          {this.renderSquare(this.state.board[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.board[3])}
          {this.renderSquare(this.state.board[4])}
          {this.renderSquare(this.state.board[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.board[6])}
          {this.renderSquare(this.state.board[7])}
          {this.renderSquare(this.state.board[8])}
        </div>
      </div>
    );
  }
}

export default Board;
