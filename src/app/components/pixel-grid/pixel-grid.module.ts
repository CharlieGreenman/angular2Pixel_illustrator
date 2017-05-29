import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelGridComponent } from './pixel-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PixelGridComponent
  ],
  exports: [
    PixelGridComponent
  ],
  providers: []

})
export class PixelGridModule { }
