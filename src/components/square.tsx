import React from "react";
import { ISquare } from  "./ISquare";

interface SquareProps {
  value: ISquare;
  onClick: () => void;
  isHighlight:boolean;
}
function Square(props: SquareProps) {
  return (
    <button className={`square ${props.isHighlight ? 'highlight' : ''}`}
            onClick={() => props.onClick()}>
    {props.value}
    </button>
  );
}
export default Square;