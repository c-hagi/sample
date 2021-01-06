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
        onClick={() => props.onClick(i)} />
    );
  }
    

      return (
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
}export default Board;