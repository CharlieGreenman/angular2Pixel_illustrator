/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridIllustratorComponent } from './grid-illustrator.component';

describe('GridIllustratorComponent', () => {
  let component: GridIllustratorComponent;
  let fixture: ComponentFixture<GridIllustratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
