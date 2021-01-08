import React from "react";
import '../index.css';
import Square from './square';
import { ISquare } from  "./ISquare";
import {calculateWinner} from './ISquare';

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
  highlightCells:calculateWinner[]
}

function Board(props: BoardProps){
    function renderSquare(i: number,isHighlight:boolean) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        key={i}
        isHighlight={isHighlight}
        />
    );
  }
    
  return (
    <div>
      {Array(3).fill(0).map((row, i) => {
          return (
            <div className="board-row" 
                 key={i}>
      {Array(3).fill(0).map((col,j) => {
          return(
            renderSquare(i * 3 + j, props.highlightCells.indexOf(i * 3 + j) !== -1)
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

//renderSquareの引数を２つにする
//calculateWinner関数で勝者が決まった場合はマス目に色を付ける
//
//indexOf() メソッドは、呼び出す String オブジェクト中で、 fromIndex から検索を始め、
//指定された値が最初に現れたインデックスを返します。値が見つからない場合は -1 を返します。

//型も含めて比較する不等価演算子「!==」
//左右のオペランド（演算子引数）の値を比較し、型も含めて等しくなければ「真（true）」、型も含めて等しければ「偽（false）」を返す