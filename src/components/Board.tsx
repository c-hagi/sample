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
    

  return (
    <div>
      {
        Array(3).fill(0).map((row, i) => {
          return (
            <div className="board-row" 
                 key={i}>
      {
        Array(3).fill(0).map((col,n) => {

          return(
            renderSquare(i * 3 + n)
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