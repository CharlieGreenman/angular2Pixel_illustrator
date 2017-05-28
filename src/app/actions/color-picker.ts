import * as types from "../constants/ActionTypes";

export function BackgroundColor(color, r, g, b){
    return{
        type: types.BACKGROUND_COLOR,
        backgroundHex: color
    }
}

export function BackgroundColorRGB(red, green, blue) {
  return{
    type: types.BACKGROUND_RGB_COLOR,
    backgroundRed: red,
    backgroundGreen: green,
    backgroundBlue: blue
  }
}

export function PixelColor(color){
    return{
        type: types.PIXEL_COLOR,
        pixelHex: color
    }
}

export function PixelColorRGB(r,g,b){
    return{
        type: types.PIXEL_RGB_COLOR,
        red: r,
        green: g,
        blue: b
    }
}
