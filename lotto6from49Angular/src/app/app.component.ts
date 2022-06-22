import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  firstList = ["elem1","elem2","elem3"];
  secondList = ['telem1', 'telem2', 'telem3'];
  thirdList = ['1', 'm2', 'lem3'];
  forthList = ['tt', 'pp2', 'zz'];

  altForImage: string = "";
  userInput: string;
  secondUserInput: string = "one way data binding";
  title: string;

}
