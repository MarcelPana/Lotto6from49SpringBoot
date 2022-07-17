import { Component, OnInit } from '@angular/core';
import {ExtractedNumbersService} from "../../../service/extracted-numbers.service";
import {UsersListService} from "../../../service/users-list.service";
import {ExtractedNumbers} from "../../../entities/extracted-numbers";
import {UsersList} from "../../../entities/users-list";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersListArray: UsersList[];

  constructor(private usersListService: UsersListService) {

  }

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.usersListService.getUsersList().subscribe(
      data => {
        this.usersListArray= data;
      }
    )
  }

}
