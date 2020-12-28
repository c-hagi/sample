import React from 'react';
import '../index';
import Board  from './Board';
import calculateWinner from './calculateWinner.'
import { History } from "./ISquare";

interface GameState {
  history: History[];
  stepNumber: number;
  xIsNext: boolean;
}
export default class Game extends React.Component {
  constructor(props: GameState) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      stepNumber: 0,
      xIsNext: true,
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
        row: Math.floor(i / 3) + 1,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });

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

    const moves = history.map((step, move) => {
      const decs = move ?
        `Go to move #${move}（col: ${step.col}, row: ${step.row}）`:
        `Go to start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{decs}</button>
        </li>
      );
    });
  
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}}