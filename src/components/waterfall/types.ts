export interface IWaterfall {
  cellWidth: number;
  gap:
    | number
    | {
        row: number;
        column: number;
      };
}

export interface ICell {
  top: number;
  left: number;
  height: number;
}

export interface ICellContent {
  height: number;
}

export type ICellColumnsCount = number;
