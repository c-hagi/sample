import React from "react";
import '../index.css';
import Square from './square';
import { ISquare } from  "./ISquare";

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

function Board(props: BoardProps){
    function renderSquare(i: number) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        key={i} />
    );
  }
    

//map関数を2つ使って表示する
  return (
    <div>
      {
        Array(3).fill(0).map((row, a) => {
          return (
            <div className="board-row" 
                 key={a}>
      {
        Array(3).fill(0).map((col,b) => {

          return(
            renderSquare(a * 3 + b)
          )
        })
      }
            </div>
          )
        })
      }
    </div>
  );
}
export default Board;