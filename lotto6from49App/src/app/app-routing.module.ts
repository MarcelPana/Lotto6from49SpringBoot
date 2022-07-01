import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExtractedNumbersComponent} from "./extracted-numbers/extracted-numbers.component";

const routes: Routes = [
  { path: 'app-extracted-numbers', component: ExtractedNumbersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
