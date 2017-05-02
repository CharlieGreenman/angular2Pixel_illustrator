import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-column',
  templateUrl: './color-picker-column.component.html',
  styleUrls: ['./color-picker-column.component.scss'],
  inputs: ['letter', 'id', 'value']
})
export class ColorPickerColumnComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
