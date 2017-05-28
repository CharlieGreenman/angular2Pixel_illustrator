import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { ColorConverterSvcService } from '../../../core/color-converter-svc.service';
import { BackgroundColor, BackgroundColorRGB} from '../../../actions/color-picker';

@Component({
  selector: 'app-background-color-picker',
  templateUrl: './background-color-picker.component.html',
  styleUrls: ['./background-color-picker.component.scss'],
  providers: [ColorConverterSvcService]
})
export class BackgroundColorPickerComponent implements OnInit {
  colors;
  changeBackgroundColor$ = new Subject();
  changeBackgroundColorRGB$ = new Subject();

  constructor(store: Store<any>, colorConverterSvcService: ColorConverterSvcService) {
    this.colors = store.select('colors');

    let colorObj = {
      hex: '#191919',
      red: '25',
      green: '25',
      blue: '25'
    };

    Observable.merge(
      // Create observable map for  when background hex changes, and use that
      // value to update store for backgroundColor
      this.changeBackgroundColor$.map((value) => (
        BackgroundColor(value, colorConverterSvcService.hexToRgb(value).r,
        colorConverterSvcService.hexToRgb(value).g,
        colorConverterSvcService.hexToRgb(value).b)
      )),
      this.changeBackgroundColorRGB$.map((value: any) => (
        BackgroundColorRGB(value.backgroundRed, value.backgroundGreen,
          value.backgroundBlue)
      ))

    )
    .subscribe((action)=>{
      store.dispatch(action)
    })

  }

  ngOnInit() {

  }

}
