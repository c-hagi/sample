import { ISquare } from './ISquare'

 function calculateWinner(squares: Array<ISquare>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        Draw: false,
        result:squares[a],
        line:[a, b, c] 
      };
    }
  }
  if (squares.filter((elemrnt) => !elemrnt).length === 0) {
    return {
      Draw: true,
      result: null,
      line: []
    }
  }
  return null;
}
export default　calculateWinner;