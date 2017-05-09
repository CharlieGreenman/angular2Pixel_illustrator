import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-background-color-picker',
  templateUrl: './background-color-picker.component.html',
  styleUrls: ['./background-color-picker.component.scss']
})
export class BackgroundColorPickerComponent implements OnInit {
  colors;

  constructor(store: Store<any>) {
    this.colors = store.select('colors');

  }

  ngOnInit() {
  }

}
