
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorConverterSvcService } from '../color-converter.service';

describe('ColorConverterSvcService', () => {
  let service: ColorConverterSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorConverterSvcService]
    });
    service = TestBed.get(ColorConverterSvcService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  describe('functionality for the hexToRGB Function', function() {
    it('should convert white hex to white equivalent in rgb.',() => {
      expect(service.hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('should convert black hex to black equivalent in rgb.', () => {
      expect(service.hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should convert shorthand white hex to proper equivalent in rgb.', () => {
      expect(service.hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('should convert shorthand black hex to proper equivalent in rgb.', () => {
      expect(service.hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
    });
  });

  describe('Functionality for the RGBToHex functionality', function() {
    it('should convert rgb to hex if color is white',() => {
      expect(service.rgbToHex(255,255,255)).toEqual('#ffffff');
    });

    it('should convert rgb to hex if color is black',() => {
      expect(service.rgbToHex(0,0,0)).toEqual('#000000');
    });
  });

  });
