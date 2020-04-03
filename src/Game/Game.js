import React, { Component } from 'react';
import Board from '../Board/Board';

class Game extends Component {
  state = {
    currentPlayer: 'X',
    turnCount: 0,
    status: 'Game on'
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            className="Board"
            gameStatus={this.props.status} />
        </div>
        <div className="game-info">Current Player: {this.state.currentPlayer}
          <ol>{this.state.games}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
