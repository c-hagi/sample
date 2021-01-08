export type ISquare = 'X' | 'O' | null;
export type calculateWinner = '' | number| null;

export interface History {
  squares: ISquare[],
  col: number,
  row: number,
}