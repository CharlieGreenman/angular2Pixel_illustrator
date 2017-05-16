import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { ColorConverterSvcService } from '../../../core/color-converter-svc.service';
import { BackgroundColor, BackgroundColorRGB } from '../../../actions/color-picker';

@Component({
  selector: 'app-background-color-picker',
  templateUrl: './background-color-picker.component.html',
  styleUrls: ['./background-color-picker.component.scss'],
  providers: [ColorConverterSvcService]
})
export class BackgroundColorPickerComponent implements OnInit {
  colors;
  changeBackgroundColor$ = new Subject();

  constructor(store: Store<any>, colorConverterSvcService: ColorConverterSvcService) {
    this.colors = store.select('colors');
    console.log('background color initialized: ' + JSON.stringify(colorConverterSvcService.hexToRgb('#123123')));

    Observable.merge(
      this.changeBackgroundColor$.map((value) => (BackgroundColor(value),
        BackgroundColorRGB(colorConverterSvcService.hexToRgb(value).r,
        colorConverterSvcService.hexToRgb(value).g,
        colorConverterSvcService.hexToRgb(value).b)
      ))
    )
    .subscribe((action)=>{
      console.log('action: ' + JSON.stringify(action, null, 2))
      store.dispatch(action)
    })

  }

  ngOnInit() {

  }

}
