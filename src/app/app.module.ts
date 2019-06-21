import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { ImgeditComponent } from './imgedit/imgedit.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    ImgeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
