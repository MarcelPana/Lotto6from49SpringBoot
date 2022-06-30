import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedNumbersComponent } from './components/extracted-numbers/extracted-numbers.component';
import {ExtractedNumbersServiceService} from "../service/extracted-numbers-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ExtractedNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExtractedNumbersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
