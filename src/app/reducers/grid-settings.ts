import * as types from "../constants/ActionTypes";

const initialGridSettings = {
    column: 20,
    row: 20,
    pixelSize: 20
};

export const gridSettings = (state = initialGridSettings, action) => {
  switch(action.type) {
  case types.GRID_SETTINGS:
      return Object.assign({}, state, {
          column: Number(action.columnCount),
          row: Number(action.rowCount),
          pixelSize: Number(action.pixelSize)
      });
  default:
      return state;
  }
}
