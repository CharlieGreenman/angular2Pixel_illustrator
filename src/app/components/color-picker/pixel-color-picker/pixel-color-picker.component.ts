import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { ColorConverterSvcService } from '../../../core/color-converter-svc.service';
import { PixelColor, PixelColorRGB} from '../../../actions/color-picker';

@Component({
  selector: 'app-pixel-color-picker',
  templateUrl: './pixel-color-picker.component.html',
  styleUrls: ['./pixel-color-picker.component.scss']
})
export class PixelColorPickerComponent implements OnInit {
  colors;
  changePixelColor$ = new Subject();
  changePixelColorRGB$ = new Subject();

  constructor(store: Store<any>, colorConverterSvcService: ColorConverterSvcService) {
    this.colors = store.select('colors');

    Observable.merge(
      // Create observable map for  when background hex changes, and use that
      // value to update store for backgroundColor
      this.changePixelColor$.map((value: any) => (
        PixelColor(value, colorConverterSvcService.hexToRgb(value).r,
        colorConverterSvcService.hexToRgb(value).g,
        colorConverterSvcService.hexToRgb(value).b)
      )),
      this.changePixelColorRGB$.map((value: any) => (
        PixelColorRGB(value.pixelRed, value.pixelGreen,
          value.pixelBlue)
      ))

    )
    .subscribe((action)=>{
      store.dispatch(action)
    })
  }

  ngOnInit() {
  }

}
