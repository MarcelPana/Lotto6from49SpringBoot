import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {ExtractedNumbers} from "../entities/extracted-numbers";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExtractedNumbersService {

  private extractedNumbersUrl = 'http://localhost:8080/api/extracted-numbers';

  constructor(private httpClient: HttpClient) { }

  getExtractedNrList(): Observable<ExtractedNumbers[]> {
    return this.httpClient.get<GetResponse>(this.extractedNumbersUrl).pipe(
      map(response => response._embedded.extractedNumbers)
    );
  }
}

interface GetResponse {
  _embedded: {
    extractedNumbers: ExtractedNumbers[];
  }
}
