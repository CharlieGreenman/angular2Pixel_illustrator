export function hexToRgb(hex): any {

  var arrBuff = new ArrayBuffer(4);
  var vw = new DataView(arrBuff);
  vw.setUint32(0,parseInt(hex, 16),false);
  var arrByte = new Uint8Array(arrBuff);

  return {
    r: arrByte[1],
    g: arrByte[2],
    b: arrByte[3]
  };
}

function componentToHex(c) : any{
  console.log("c: " + c);
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
