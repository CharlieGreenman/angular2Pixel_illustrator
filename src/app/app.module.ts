import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GridIllustratorModule } from './components/grid-illustrator/grid-illustrator.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { colors } from './reducers/color-picker';
import { gridSettings } from './reducers/grid-settings';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CodeBoxComponent } from './components/code-box/code-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GridIllustratorModule,
    StoreModule.provideStore({environment, colors, gridSettings}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
