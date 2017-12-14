import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';

// export class gridSettings implements Action {
//   readonly type = types.GRID_SETTINGS;
//
//   constructor(public columnCount: number, public rowCount: number, public pixelSize: number) {
//     columnCount: columnCount;
//     rowCount: rowCount;
//     pixelSize: pixelSize;
//   }
// }

// export type All
//   = gridSettings;

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
