import * as types from "../constants/ActionTypes";
import { hexToRgb } from '../core/utils/color-converter';

const initialColorState = {
    backgroundHex: "#191919",
    backgroundRed: "25",
    backgroundGreen: "25",
    backgroundBlue: "25",
    pixelHex: "#000000",
    red: "25",
    green: "25",
    blue: "25"
};

export const colors = (state = initialColorState, action) => {
  switch(action.type) {
    case types.BACKGROUND_COLOR:
      return Object.assign({}, state, {
          backgroundHex: action.backgroundHex || state.backgroundHex,
          backgroundRed: hexToRgb(action.backgroundHex).r
          || state.backgroundRed,
          backgroundGreen: hexToRgb(action.backgroundHex).g
          || state.backgroundGreen,
          backgroundBlue: hexToRgb(action.backgroundHex).b
          || state.backgroundBlue
      });
    case types.PIXEL_COLOR:
      return Object.assign({}, state, {
          pixelHex: action.pixelHex || state.pixelHex
      });
    case types.PIXEL_RGB_COLOR:
      return Object.assign({}, state, {
          pixelRed: action.red || state.red,
          pixelGreen: action.green || state.green,
          pixelBlue: action.blue || state.blue,
      });
    default:
      return state;
  }
};
