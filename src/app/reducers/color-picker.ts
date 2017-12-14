import * as types from '../constants/ActionTypes';
import {hexToRgb, rgbToHex} from '../core/utils/color-converter';

export interface IcolorState {
  backgroundHex: string,
  backgroundRed: number,
  backgroundGreen: number,
  backgroundBlue: number,
  pixelHex: string,
  pixelRed: number,
  pixelBlue: number,
  pixelGreen: number
};

const colorState: IcolorState = {
  backgroundHex: '#191919',
  backgroundRed: 25,
  backgroundGreen: 25,
  backgroundBlue: 25,
  pixelHex: '#000000',
  pixelRed: 25,
  pixelBlue: 25,
  pixelGreen: 25
};

export const colors = (state = colorState, action) => {
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
    case types.BACKGROUND_RGB_COLOR:
      return Object.assign({}, state, {
        backgroundHex: rgbToHex(action.backgroundRed, action.backgroundGreen,
        action.backgroundBlue) || state.backgroundHex,
        backgroundRed: action.backgroundRed || state.backgroundRed,
        backgroundGreen: action.backgroundGreen || state.backgroundGreen,
        backgroundBlue: action.backgroundBlue || state.backgroundBlue
      });
    case types.PIXEL_COLOR:
      return Object.assign({}, state, {
        pixelHex: action.pixelHex || state.pixelHex,
        pixelRed: hexToRgb(action.pixelHex).r || state.pixelRed,
        pixelGreen: hexToRgb(action.pixelHex).g || state.pixelGreen,
        pixelBlue: hexToRgb(action.pixelHex).b || state.pixelBlue
      });
    case types.PIXEL_RGB_COLOR:
      return Object.assign({}, state, {
        pixelHex: rgbToHex(action.pixelRed, action.pixelGreen,
        action.pixelBlue) || state.pixelHex,
        pixelRed: action.pixelRed || state.pixelRed,
        pixelGreen: action.pixelGreen || state.pixelGreen,
        pixelBlue: action.pixelBlue || state.pixelBlue,
      });
    default:
      return state;
  }
};
