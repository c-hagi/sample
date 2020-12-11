import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board  from './Board';


class Game extends React.Component {
//Game コンポーネントは盤面とプレースホルダーを描画している。

  constructor(props) {
    super(props);
    this.state = {
//React コンポーネントはコンストラクタで this.state を設定することで、状態を持つことができるようになる。
//現在の状態を this.state に保存
//定義されているコンポーネント内でプライベートと見なすべきもの

      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      //何手目の状態を見ているのかを表す(stateの初期値として0)
      xIsNext: true
    };
  }

  handleClick(i) {
    //マス目をクリックしたときに実行される 
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
  //jumpToメソッドを定義
    this.setState({
      stepNumber: step,
      //stepNumerが更新されるようになる

      //xIsNext: (step % 2) === 0,　(← なくても動作に変化なし)
      //stepNumber の値が偶数だった場合は xIsNext を true
    });
  }

  render() {
　//render メソッドが返すのは画面上に表示したいものの説明書き
  //render は、描画すべきものの軽量な記述形式であり、React 要素というものを返す

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
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

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
// ReactDOM.render() は 2 つの引数で React の関数を呼び出す
//<Game />: レンダリングしたいコンポーネント。
//内部にコンポーネントをレンダリングする DOM 要素: root 要素。
//これらはすべて、Gameコンポーネントを最初のコンポーネントとして 
//React アプリケーションをレンダリングすることを React に伝える。

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}