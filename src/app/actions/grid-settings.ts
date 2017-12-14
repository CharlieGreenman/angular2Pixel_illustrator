import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';

export class gridSettings implements Action {
  payload;
  readonly type = types.GRID_SETTINGS;

  constructor(public columnCount: number, public rowCount: number, public pixelSize: number) {
    this.payload = {
      columnCount: columnCount,
      rowCount: rowCount,
      pixelSize: pixelSize
    };
  }
}

// export type All
//   = gridSettings;
