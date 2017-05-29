import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { ColorConverterSvcService } from '../../../core/color-converter-svc.service';

@Component({
  selector: 'app-pixel-color-picker',
  templateUrl: './pixel-color-picker.component.html',
  styleUrls: ['./pixel-color-picker.component.scss']
})
export class PixelColorPickerComponent implements OnInit {
  colors;
  changePixelColor$ = new Subject();
  changePixelColorRGB$ = new Subject();

  constructor() { }

  ngOnInit() {
  }

}
