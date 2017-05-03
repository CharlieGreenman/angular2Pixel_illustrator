import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundColorPickerComponent } from './background-color-picker/background-color-picker.component';
import { PixelColorPickerComponent } from './pixel-color-picker/pixel-color-picker.component';
import { ColorPickerColumnComponent } from './color-picker-column/color-picker-column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BackgroundColorPickerComponent,
    PixelColorPickerComponent,
    ColorPickerColumnComponent
  ],
  providers: [],
  bootstrap: []
})
export class ColorPickerModule { }
