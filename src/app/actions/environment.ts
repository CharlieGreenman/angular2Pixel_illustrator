import * as types from "../constants/ActionTypes";

//singular state for all three applications
//change element so that element can be where it needs to be
export function InitGrid(init) {
  return {
      type: types.INIT_APP,
      init
  };
}
