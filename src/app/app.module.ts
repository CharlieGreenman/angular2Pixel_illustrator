import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ColorPickerModule } from './components/color-picker/color-picker.module';
import { PixelGridModule } from './components/pixel-grid/pixel-grid.module';

import { AppComponent } from './app.component';
import { ShowHideBarComponent } from './show-hide-bar/show-hide-bar.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { colors } from './reducers/color-picker';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorPickerModule,
    PixelGridModule,
    StoreModule.provideStore({environment, colors}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
