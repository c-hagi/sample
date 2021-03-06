import React from 'react';
import '../index';
import Board  from './Board';
import calculateWinner from './calculateWinner'
import { History } from './ISquare'

interface GameState {
  history: History[];
  stepNumber: number;
  xIsNext: boolean;
  isAsc: boolean;
}

class Game extends React.Component<{}, GameState> {
  constructor(props:GameState) {
    super(props);
    this.state = {
      history: [{
         squares: Array(9).fill(null),
         col: 0,
         row: 0,  
      }],
      stepNumber: 0,
      xIsNext: true,
      isAsc: true
    };
  }
  
  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";    
    this.setState({
      history: history.concat([{ 
        squares: squares,
        col: (i % 3) + 1,
        row: Math.floor(i / 3) + 1 ,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  　Asc() {
    this.setState({
      isAsc: !this.state.isAsc
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const stepNumber = this.state.stepNumber;
    
    let status;
    if (winner) {
      if (winner.Draw) {
        status = 'Draw';
      } 
      } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      const moves = history.map((step, move) => {
        const decs = move ?
        `Go to move #${move}（ ${step.col}, ${step.row}）`:
        `Go to start`;
      
    return (
          <li key={move}>
            <button 
            onClick={() => this.jumpTo(move)}
            className={stepNumber === move? "bold-btn" : ""}>{decs}
          　</button>
          </li>
        );
      });
      
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
            highlightCells={winner ? winner.line : []}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div><button onClick={() => this.Asc()}>並び替え</button></div>
          <ol>{this.state.isAsc ? moves : moves.reverse()}</ol> 
        </div>
      </div>
    );
  }
}
export default Game;