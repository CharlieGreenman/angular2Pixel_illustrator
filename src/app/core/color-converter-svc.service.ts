import { Injectable } from '@angular/core';

@Injectable()
export class ColorConverterSvcService {
  hexToRgb;

  constructor() {

    this.hexToRgb = (hex) => {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
    };

  }

}
