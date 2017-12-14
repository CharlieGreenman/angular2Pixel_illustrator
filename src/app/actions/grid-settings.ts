import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';

export class gridSettings implements Action {
  readonly type = types.GRID_SETTINGS;

  constructor(public columnCount: number, public rowCount: number, public pixelSize: number) {
    this.columnCount = columnCount;
    this.rowCount = rowCount;
    this.pixelSize = pixelSize;
  }
}

// export type All
//   = gridSettings;
