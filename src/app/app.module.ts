import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PixelGridModule } from './components/pixel-grid/pixel-grid.module';
import { ChooseSizeModule } from './components/choose-size/choose-size.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { colors } from './reducers/color-picker';
import { gridSettings } from './reducers/grid-settings';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChooseSizeModule,
    StoreModule.provideStore({environment, colors, gridSettings}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
