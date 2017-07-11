/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColorPickerComponent } from './color-picker.component';
import { BackgroundColorPickerComponent } from './background-color-picker/background-color-picker.component';
import { PixelColorPickerComponent } from './pixel-color-picker/pixel-color-picker.component';
import { ColorPickerColumnComponent } from './color-picker-column/color-picker-column.component';

import { StoreModule } from '@ngrx/store';
import { environment } from '../../reducers/show-hide';
import { colors } from '../../reducers/color-picker';
import { gridSettings } from '../../reducers/grid-settings';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.provideStore({
        environment, colors, gridSettings
      })],
      declarations: [ BackgroundColorPickerComponent,
      PixelColorPickerComponent,
      ColorPickerColumnComponent,
      ColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
