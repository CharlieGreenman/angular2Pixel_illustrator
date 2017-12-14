/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackgroundColorPickerComponent } from './background-color-picker.component';

import { StoreModule } from '@ngrx/store';
import { environment } from '../../../reducers/show-hide';
import { colors } from '../../../reducers/color-picker';
import { gridSettings } from '../../../reducers/grid-settings';

describe('BackgroundColorPickerComponent', () => {
  let component: BackgroundColorPickerComponent;
  let fixture: ComponentFixture<BackgroundColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({
        environment, colors, gridSettings
      })],
      declarations: [ BackgroundColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
