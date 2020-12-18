export type ISquare = 'X' | 'O' | null;
export interface History {
  squares: ISquare[];

export interface BoardProps {
    squares: ISquare[];
    onClick: (i: number) => void;
  }
}