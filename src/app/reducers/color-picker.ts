import * as types from "../constants/ActionTypes";

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
          backgroundRed: action.backgroundRed || state.backgroundRed,
          backgroundGreen: action.backgroundGreen || state.backgroundGreen,
          backgroundBlue: action.backgroundBlue || state.backgroundBlue
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
