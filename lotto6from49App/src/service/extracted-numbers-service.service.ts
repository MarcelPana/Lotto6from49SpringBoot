import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExtractedNumbers} from "../entities/extracted-numbers";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExtractedNumbersServiceService {

  private baseUrl = 'http://localhost:8080/api/extracted-numbers';

  constructor(private httpClient: HttpClient) { }

  getExtractedNrList(): Observable<ExtractedNumbers[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.extractedNumbers)
    );
  }
}

interface GetResponse {
  _embedded: {
    extractedNumbers: ExtractedNumbers[];
  }
}
