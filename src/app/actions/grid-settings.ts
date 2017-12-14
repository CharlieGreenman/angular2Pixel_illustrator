import * as types from "../constants/ActionTypes";

export function gridSettings(columnCount: number, rowCount: number, pixelSize: number) {
  return {
    type: types.GRID_SETTINGS,
    payload: {
      columnCount: columnCount,
      rowCount: rowCount,
      pixelSize: pixelSize
    }
  };
}
