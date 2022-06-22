import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import {DemoServiceService} from "./Services/demo-service.service";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExtractionsComponent } from './extractions/extractions.component';
import { UsersNumbersComponent } from './users-numbers/users-numbers.component';
import { Home1Component } from './home1/home1.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    PostComponent,
    ContactComponent,
    UsersComponent,
    HomeComponent,
    AboutUsComponent,
    ExtractionsComponent,
    UsersNumbersComponent,
    Home1Component,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
