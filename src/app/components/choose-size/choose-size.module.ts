import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelGridModule } from '../pixel-grid/pixel-grid.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';

import { ChooseSizeComponent } from './choose-size.component';

@NgModule({
  imports: [
    CommonModule,
    PixelGridModule,
    ColorPickerModule
  ],
  declarations: [
    ChooseSizeComponent
  ],
  exports: [
    ChooseSizeComponent
  ],
  providers: []
})
export class ChooseSizeModule { }
