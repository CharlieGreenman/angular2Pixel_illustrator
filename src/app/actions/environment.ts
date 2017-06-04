import * as types from "../constants/ActionTypes";

//singular state for all three applications
//change element so that element can be where it needs to be
export function InitGrid(init) {
  return {
      type: types.INIT_APP,
      init
  };
}

export function gridSettings(columnCount, rowCount, pixelSize) {
  return {
    type: types.GRID_SETTINGS,
    columnCount: columnCount,
    rowCount: rowCount,
    pixelSize: pixelSize
  }
}

//three input fields for form
//columncount
export function ColumnCount(column) {
  return {
      type: types.COLUMN_COUNT,
      count: column
  };
}

//rowcount
export function RowCount(row) {
  return {
      type: types.ROW_COUNT,
      count: row
  };
}

//rowcount
export function PixelSize(pixel) {
  return {
      type: types.PIXEL_SIZE,
      count: pixel
  };
}
