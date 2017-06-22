export function determineCoordinate(event, direction): number {
  event = event || window.event;
  return Math.floor(event.offsetX === undefined ? event.layer[direction] : event.offset[direction] / this.pixelSize) * this.pixelSize;
}
