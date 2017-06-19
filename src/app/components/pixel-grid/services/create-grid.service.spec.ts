/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateGridService } from './create-grid.service';

describe('CreateGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateGridService]
    });
  });

  it('should ...', inject([CreateGridService], (service: CreateGridService) => {
    expect(service).toBeTruthy();
  }));
});
