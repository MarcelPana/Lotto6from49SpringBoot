import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-play-now',
  templateUrl: './play-now.component.html',
  styleUrls: ['./play-now.component.css']
})
export class PlayNowComponent implements OnInit {



  constructor( ) { }

  ngOnInit(): void {
  }

  submitForm(){
    alert("somebody clicked")
  }




}
