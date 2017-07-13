/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ColorConverterSvcService } from './color-converter-svc.service';

describe('ColorConverterSvcService', () => {
  let colorConverterSvcService: ColorConverterSvcService;

  beforeEach(() => {
    mockColorConverterSvcService = new ColorConverterSvcService();
    TestBed.configureTestingModule(
      {provide: ColorConverterSvcService, useValue: mockColorConverterSvcService}
    });
  });

  it('should ...', inject([ColorConverterSvcService], (service: ColorConverterSvcService) => {
    expect(service).toBeTruthy();
  }));

  describe('functionality for the hexToRGB Function', function() {
    fit('should convert hex to rgb.', inject([ColorConverterSvcService], (service: ColorConverterSvcService) => {
      expect(mockColorConverterSvcService.hexToRGB('#123123')).toEqual('123');
    }));
  });
});
