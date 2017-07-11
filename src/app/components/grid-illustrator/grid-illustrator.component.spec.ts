/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PixelGridModule } from '../pixel-grid/pixel-grid.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { ChooseSizeModule } from '../choose-size/choose-size.module';
import { CodeBoxModule } from '../code-box/code-box.module';

import { StoreModule } from '@ngrx/store';
import { environment } from '../../reducers/show-hide';
import { colors } from '../../reducers/color-picker';
import { gridSettings } from '../../reducers/grid-settings';

import { GridIllustratorComponent } from './grid-illustrator.component';

describe('GridIllustratorComponent', () => {
  let component: GridIllustratorComponent;
  let fixture: ComponentFixture<GridIllustratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PixelGridModule,
      ColorPickerModule,
      ChooseSizeModule,
      CodeBoxModule,
      StoreModule.provideStore({
        environment, colors, gridSettings
      })],
      declarations: [ GridIllustratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridIllustratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
