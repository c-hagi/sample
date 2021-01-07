export type ISquare = 'X' | 'O' | null;
export interface History {
  squares: ISquare[],
  col: number,
  row: number
}