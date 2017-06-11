import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.scss']
})
export class ChooseSizeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  initGrid(e) {
    console.log('init grid clicked on.')
  }

}
