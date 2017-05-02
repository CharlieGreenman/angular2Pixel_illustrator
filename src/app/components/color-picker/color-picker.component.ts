import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BackgroundColorPickerComponent } from './background-color-picker/background-color-picker.component';

@NgModule({
  declarations: [
    BackgroundColorPickerComponent
  ],
  providers: []
})

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
