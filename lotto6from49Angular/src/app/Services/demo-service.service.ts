import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface Post {

  id: number;
  title: string;
  body: string;

}

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get('https:jsonplaceholder.typicode.com/posts')
  }

  getPost(): Observable<any> {
    return this.http.get('https:jsonplaceholder.typicode.com/posts/${id}')
  }
}
