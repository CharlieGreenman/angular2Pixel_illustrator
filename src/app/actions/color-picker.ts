import * as types from "../constants/ActionTypes";

export function BackgroundColor(color, r, g, b){
    return{
        type: types.BACKGROUND_COLOR,
        backgroundHex: color,
        backgroundRed: r,
        backgroundGreen: g,
        backgroundBlue: b
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
