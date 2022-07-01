import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedNumbersComponent } from './extracted-numbers/extracted-numbers.component';
import { TralalalComponent } from './components/tralalal/tralalal.component';
import {ExtractedNumbersService} from "../service/extracted-numbers.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TralalalComponent,
    ExtractedNumbersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ExtractedNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
