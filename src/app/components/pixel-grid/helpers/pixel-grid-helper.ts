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

export function removePixelFromGrid(ctx, event, pixelSize) {
  return ctx.clearRect(determinePixelOffset(event, pixelSize, 'X'),
            determinePixelOffset(event, pixelSize, 'Y'),
            //accomodate for 2 px border
            //need to put in a variable down the line
            pixelSize - 2, pixelSize - 2);
}

export function isCurrentPixelColor(ctx, event, pixelSize) {
  return ctx.clearRect(determinePixelOffset(event, pixelSize, 'X'),
            determinePixelOffset(event, pixelSize, 'Y'),
            //accomodate for 2 px border
            //need to put in a variable down the line
            pixelSize - 2, pixelSize - 2);
}

// this is a one off function, not going to create smaller functions
// going to keep as is
export function drawGrid(ctx, pixelSize, column, row, backgroundColor) {
  for(var x = 0; x < column; x++) {
      for(var y = 0; y < row; y++) {
          ctx.strokeStyle = backgroundColor;
          ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
          ctx.fillStyle = pixelSize;
          ctx.fillRect(x * pixelSize + 1, y * pixelSize + 1, pixelSize - 2, pixelSize - 2);
      }
  }
}

export function determineIfSamePixelColor(imgData, colors) {
  console.log('imgData.data[0]: ' + imgData.data[0]);
  console.log('parseFloat(colors.pixelRed): ' + colors.pixelRed);

  console.log('imgData.data[1]: ' + imgData.data[1]);
  console.log('imgData.data[2]: ' + imgData.data[2]);

  if(imgData.data[0] === parseFloat(colors.pixelRed) &&
     imgData.data[1] === parseFloat(colors.pixelGreen) &&
     imgData.data[2] === parseFloat(colors.pixelBlue)) {
       return true;
  }
  else {
    return false;
  }
}
