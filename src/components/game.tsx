import React from 'react';
import '../index.css';
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
  
function handleClick(i) { 
  //マス目をクリックしたときに実行される 
  const history = props.history.slice(0, stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares) || squares[i]) 
  squares[i] = state.xIsNext ? "X" : "O";
  setState({
    history: history.concat([
      {
        squares: squares
      }
    ]),
    stepNumber: history.length,
    xIsNext: !state.xIsNext
  });


jumpTo(step) 
  setState({
    stepNumber: step,
    xIsNext: (step % 2) === 0,
  });
// xIsNext：どちらのプレーヤの手番なのかを決める 

return() => {
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  // 着手履歴の配列をマップして画面上のボタンを表現する React 要素を作りだし、
  // 過去の手番に「ジャンプ」するためのボタンの一覧を表示できる
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
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
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
        );
      }
    } 