import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBoxComponent } from './code-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeBoxComponent
  ],
  exports: [
    CodeBoxComponent
  ],
  providers: []
})
export class CodeBoxModule { }
