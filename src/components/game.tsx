import React from 'react';
import '../index';
import Board  from './Board';
import calculateWinner from './calculateWinner.'

export default function Game (props){
  return (
    <Board>
      history={Array(9).fill(null)};
      stepNumber={0};
      xIsNext={true};</Board>
  );
}
  
handleClick(i: number) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = state.xIsNext ? "X" : "O";
  setState({
    history: history.concat([{ squares: squares }]),
    stepNumber: history.length,
    xIsNext: !state.xIsNext,
  });
}    
      jumpTo(step: number) {
        this.setState({
          stepNumber: step,
          xIsNext: step % 2 === 0,
        });
      }    // xIsNext：どちらのプレーヤの手番なのかを決める 
  
      render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
          const desc = move ? "Go to move #" + move : "Go to game start";
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
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
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={(i: number) => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        );
      }