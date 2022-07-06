import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtractedNumbersComponent} from "./components/extracted-numbers/extracted-numbers.component";
import {DeJoacaComponent} from "./components/de-joaca/de-joaca.component";
import {HomeComponent} from "./components/home/home.component";
import {PlayNowComponent} from "./components/play-now/play-now.component";
import {ChooseNumbersComponent} from "./components/choose-numbers/choose-numbers.component";
import {UsersListComponent} from "./components/users-list/users-list.component";


const routes: Routes = [
  { path: 'app-users-list', component: UsersListComponent},
  { path: 'app-choose-numbers', component: ChooseNumbersComponent},
  { path: 'app-play-now', component: PlayNowComponent},
  { path: 'de-joaca', component: DeJoacaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'extraction', component: HomeComponent},
  { path: 'extracted-numbers', component: ExtractedNumbersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
