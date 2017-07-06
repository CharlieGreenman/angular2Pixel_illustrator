/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChooseSizeComponent } from './choose-size.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../reducers/show-hide';
import { colors } from '../../reducers/color-picker';
import { gridSettings } from '../../reducers/grid-settings';

describe('ChooseSizeComponent', () => {
  let component: ChooseSizeComponent;
  let fixture: ComponentFixture<ChooseSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.provideStore({
        environment, colors, gridSettings
      })],
      declarations: [ ChooseSizeComponent ],
      exports: [ChooseSizeComponent],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
