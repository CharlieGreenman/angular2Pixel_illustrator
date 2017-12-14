import * as types from "../constants/ActionTypes";
import { Action } from '@ngrx/store';

import { IGridSettings } from '../models/gridSettings';

export class gridSettings implements Action {
  readonly type = types.GRID_SETTINGS;

  constructor(public payload: IGridSettings) {};
}

export type GridSettingActions
   = gridSettings;
