import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';

import { IGridSettings } from '../models/gridSettings';

export class gridSettings implements Action {
  readonly type = types.GRID_SETTINGS;

  constructor(public payload: IGridSettings) {};
  // constructor(public columnCount: number, public rowCount: number, public pixelSize: number) {
  //   this.payload = {
  //     columnCount: columnCount,
  //     rowCount: rowCount,
  //     pixelSize: pixelSize
  //   };
  // }
}

// export type All
//   = gridSettings;
