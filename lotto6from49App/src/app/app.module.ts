import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtractedNumbersComponent } from './components/extracted-numbers/extracted-numbers.component';
import { TralalalComponent } from './components/tralalal/tralalal.component';
import {ExtractedNumbersService} from "../service/extracted-numbers.service";
import {HttpClientModule} from "@angular/common/http";
import { DeJoacaComponent } from './components/de-joaca/de-joaca.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import { PlayNowComponent } from './components/play-now/play-now.component';
import { ChooseNumbersComponent } from './components/choose-numbers/choose-numbers.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TralalalComponent,
    ExtractedNumbersComponent,
    DeJoacaComponent,
    HomeComponent,
    PlayNowComponent,
    ChooseNumbersComponent,
    UsersListComponent,
    UserRegistrationComponent,
    LoginPageComponent
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
