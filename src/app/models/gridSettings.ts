export interface IGridSettings{
  columnCount: number;
  rowCount: number;
  pixelSize: number;
}

export function generateMockGridSettings(): IGridSettings {
  return {
    columnCount: 20,
    rowCount: 20,
    pixelSize: 20
  };
}
