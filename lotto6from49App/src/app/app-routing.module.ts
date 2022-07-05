import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtractedNumbersComponent} from "./extracted-numbers/extracted-numbers.component";
import {DeJoacaComponent} from "./de-joaca/de-joaca.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
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
