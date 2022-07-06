import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {UsersList} from "../entities/users-list";

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  private usersListUrl = '//localhost:8080/api/userses';

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<UsersList[]> {
    return this.httpClient.get<GetResponse>(this.usersListUrl).pipe(
      map(response => response._embedded.userses)
    );
  }
}

interface GetResponse {
  _embedded: {
    userses: UsersList[];
  }
}
