import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { gridSettings } from '../../actions/environment';

@Component({
  selector: 'app-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.scss']
})
export class ChooseSizeComponent implements OnInit {
  gridSettings;
  changeGridSettings$ = new Subject();

  constructor(store: Store<any>) {
    this.gridSettings = store.select('gridSettings');

    Observable.merge(
      this.changeGridSettings$.map((value: any) => (
        gridSettings(value.columnCount, value.rowCount, value.pixelSize)
      ))
    )
    .subscribe((action)=>{
      store.dispatch(action)
    })

  }

  ngOnInit() {
  }

}
