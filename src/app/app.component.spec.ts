/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { GridIllustratorModule } from './components/grid-illustrator/grid-illustrator.module';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { colors } from './reducers/color-picker';
import { gridSettings } from './reducers/grid-settings';

import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        GridIllustratorModule,
        RouterModule,
        StoreModule.provideStore({environment, colors, gridSettings})
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

});
