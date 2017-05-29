/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixelGridComponent } from './pixel-grid.component';

describe('PixelGridComponent', () => {
  let component: PixelGridComponent;
  let fixture: ComponentFixture<PixelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
