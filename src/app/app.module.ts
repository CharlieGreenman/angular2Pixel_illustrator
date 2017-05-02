import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { ShowHideBarComponent } from './show-hide-bar/show-hide-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BackgroundColorPickerComponent } from './components/color-picker/background-color-picker/background-color-picker.component';
import { ColorPickerColumnComponent } from './components/color-picker/color-picker-column/color-picker-column.component';
import { PixelColorPickerComponent } from './components/color-picker/pixel-color-picker/pixel-color-picker.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideBarComponent,
    BackgroundColorPickerComponent,
    ColorPickerColumnComponent,
    PixelColorPickerComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({environment}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
