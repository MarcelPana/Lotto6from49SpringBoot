import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-numbers',
  templateUrl: './users-numbers.component.html',
  styleUrls: ['./users-numbers.component.sass']
})
export class UsersNumbersComponent implements OnInit {

  userInput: number;

  constructor() { }

  ngOnInit(): void {
  }

  saveNumber(){
    alert("number saved"+" "+ this.userInput)
  }
}
