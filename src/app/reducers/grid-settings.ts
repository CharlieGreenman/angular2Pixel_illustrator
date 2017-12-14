import * as types from "../constants/ActionTypes";
import {ActionReducer, Action} from "@ngrx/store";
import { GridSettingActions } from '../actions/grid-settings';

export interface InitialGridSettingsState {
  column: number;
  row: number;
  pixelSize: number;
  initGrid: boolean;
}

const initialGridSettings: InitialGridSettingsState = {
  column: 20,
  row: 20,
  pixelSize: 20,
  initGrid: false
};

// For somereason column, row, and pixelSize here, are not conforming to interface. Look into.
export const gridSettings: ActionReducer<InitialGridSettingsState> = (state = initialGridSettings, action: GridSettingActions)
  : InitialGridSettingsState => {
  switch(action.type) {
  case types.GRID_SETTINGS:
    return Object.assign({}, state, {
      column: Number(action.payload.columnCount),
      row: Number(action.payload.rowCount),
      pixelSize: Number(action.payload.pixelSize),
      initGrid: true
    });
  default:
      return state;
  }
};
