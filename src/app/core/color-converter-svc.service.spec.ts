
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorConverterSvcService } from './color-converter-svc.service';

describe('ColorConverterSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorConverterSvcService]
    });
  });

  it('should ...', inject([ColorConverterSvcService], (service: ColorConverterSvcService) => {
    expect(service).toBeTruthy();
  }));

  describe('functionality for the hexToRGB Function', function() {
    it('should convert white hex to white equivalent in rgb.', inject([ColorConverterSvcService],
      (service: ColorConverterSvcService) => {
      expect(service.hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('should convert black hex to black equivalent in rgb.', inject([ColorConverterSvcService],
      (service: ColorConverterSvcService) => {
      expect(service.hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

  });
