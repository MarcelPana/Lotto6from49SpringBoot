import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userInput: number;
  firstName: string;
  secondName: string;
  age: number;
  email: string;
  city: string;
  country: string;


  constructor() {

  }

  ngOnInit(): void {
  }


saveUser(): void {
    alert("user saved " + " " + this.firstName + this.secondName + this.age + this.email + this.city + this.country);
}

}
