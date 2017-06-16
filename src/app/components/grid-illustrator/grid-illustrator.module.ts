import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelGridModule } from '../pixel-grid/pixel-grid.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { ChooseSizeModule } from '../choose-size/choose-size.module';
import { CodeBoxModule } from '../code-box/code-box.module';

import { GridIllustratorComponent } from './grid-illustrator.component';

@NgModule({
  imports: [
    CommonModule,
    PixelGridModule,
    ColorPickerModule,
    ChooseSizeModule,
    CodeBoxModule
  ],
  declarations: [
    GridIllustratorComponent
  ],
  exports: [
    GridIllustratorComponent
  ],
  providers: []
})
export class GridIllustratorModule { }
