import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponentComponent} from "./list-component/list-component.component";
import {ContactComponent} from "./contact/contact.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ExtractionsComponent} from "./extractions/extractions.component";
import {Home1Component} from "./home1/home1.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponentComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'users', component: UsersComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'extractions', component: ExtractionsComponent},
  { path: 'home1', component: Home1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
