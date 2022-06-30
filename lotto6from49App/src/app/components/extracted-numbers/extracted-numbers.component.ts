import { Component, OnInit } from '@angular/core';
import {ExtractedNumbers} from "../../../entities/extracted-numbers";
import {ExtractedNumbersServiceService} from "../../../service/extracted-numbers-service.service";

@Component({
  selector: 'app-extracted-numbers',
  templateUrl: './extracted-numbers.component.html',
  styleUrls: ['./extracted-numbers.component.css']
})
export class ExtractedNumbersComponent implements OnInit {

  extractedNumbersArray: ExtractedNumbers[];

  constructor(private extractedNumbersService: ExtractedNumbersServiceService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.extractedNumbersService.getExtractedNrList().subscribe(
      data => {
        this.extractedNumbersArray= data;
      }
    )
  }
}
