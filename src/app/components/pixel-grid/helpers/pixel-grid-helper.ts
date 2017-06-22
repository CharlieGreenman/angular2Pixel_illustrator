export function determineCoordinate(event, direction): number {
  event = event || window.event;
  return Math.floor(event.offsetX === undefined ? event.layer[direction] : event.offset[direction] / this.pixelSize) * this.pixelSize;
}

function determinePixelOffset(event, pixelSize, direction): number {
  return Math.floor(event.offset[direction] / pixelSize) * pixelSize + 1;
}

export function determinePixelRGB(): string {
  return ctx.getImageData(Math.floor(e.offsetX / elem.s.pixSize) * elem.s.pixSize + 1,
            Math.floor(e.offsetY / elem.s.pixSize) * elem.s.pixSize + 1,
            elem.s.pixSize - 2, elem.s.pixSize - 2);

}
