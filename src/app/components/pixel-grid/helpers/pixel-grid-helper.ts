export function determineCoordinate(event, direction): number {
  event = event || window.event;
  return Math.floor(event.offsetX === undefined ? event.layer[direction] : event.offset[direction] / this.pixelSize) * this.pixelSize;
}

function determinePixelOffset(event, pixelSize, direction): number {
  return Math.floor(event.offset[direction] / pixelSize) * pixelSize + 1;
}

export function determinePixelRGB(ctx, event, pixelSize): string {
  return ctx.getImageData(determinePixelOffset(event, pixelSize, 'X'),
            determinePixelOffset(event, pixelSize, 'Y'),
            pixelSize - 2, pixelSize - 2);
}
