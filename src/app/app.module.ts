import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { EgiantsdetailsComponent } from './egiantsdetails/egiantsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    EgiantsdetailsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
