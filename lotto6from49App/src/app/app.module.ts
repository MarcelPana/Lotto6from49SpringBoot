import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedNumbersComponent } from './extracted-numbers/extracted-numbers.component';
import { TralalalComponent } from './components/tralalal/tralalal.component';
import {ExtractedNumbersService} from "../service/extracted-numbers.service";
import {HttpClientModule} from "@angular/common/http";
import { DeJoacaComponent } from './de-joaca/de-joaca.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TralalalComponent,
    ExtractedNumbersComponent,
    DeJoacaComponent,
    HomeComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [ExtractedNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
