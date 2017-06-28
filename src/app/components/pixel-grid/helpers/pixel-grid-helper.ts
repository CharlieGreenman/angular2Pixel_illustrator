export function determineCoordinate(event, direction, pixelSize): number {
  return Math.floor(event[`offset${direction}`] === undefined ?
    event[`layer${direction}`]:
    event[`offset${direction}`] / pixelSize) * pixelSize;
}

function determinePixelOffset(event, pixelSize, direction): number {
  return Math.floor(event[`offset${direction}`] / pixelSize) * pixelSize + 1;
}

export function determinePixelRGB(ctx, event, pixelSize): number[] {
  return ctx.getImageData(determinePixelOffset(event, pixelSize, 'X'),
            determinePixelOffset(event, pixelSize, 'Y'),
            pixelSize - 2, pixelSize - 2);
}

export function drawPixelOnGrid(ctx, event, pixelSize) {
  return ctx.fillRect(determinePixelOffset(event, pixelSize, 'X'),
            determinePixelOffset(event, pixelSize, 'Y'),
            //accomodate for 2 px border
            //need to put in a variable down the line
            pixelSize - 2, pixelSize - 2);
}
