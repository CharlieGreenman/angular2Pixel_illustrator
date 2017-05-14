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
});
