import {Component, OnInit} from '@angular/core';
import {ExtractedNumbers} from "../../../entities/extracted-numbers";
import {ExtractedNumbersService} from "../../../service/extracted-numbers.service";


class ExtractedNumbersServiceService {
}

@Component({
  selector: 'app-extracted-numbers',
   templateUrl: './extracted-numbers.component.html',
  styleUrls: ['./extracted-numbers.component.css']
})
export class ExtractedNumbersComponent implements OnInit {

  extractedNumbersArray: ExtractedNumbers[];

  constructor(private extractedNumbersService: ExtractedNumbersService) {

  }

  ngOnInit() {
    this.extractedNumbersList();
  }

  extractedNumbersList() {
    this.extractedNumbersService.getExtractedNrList().subscribe(
      data => {
        this.extractedNumbersArray = data;
      }
    )
  }

}



