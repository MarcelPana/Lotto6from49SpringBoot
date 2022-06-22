import {Component, Input, OnInit} from '@angular/core';
import {DemoServiceService} from "../Services/demo-service.service";
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {


@Input()
list: string[];
postList:[] = [];


urlToimagne: string = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vezicatface.ro%2Fimg%2FArticole%2FMASINA%2520mini%2520roz-min2.png&imgrefurl=https%3A%2F%2Fwww.vezicatface.ro%2Farticole%2Fmasini-second-hand-recomandate-pentru-femei&tbnid=07zHmVCdlq7TFM&vet=12ahUKEwi2-pOw1-X3AhXOt6QKHcC7BJkQMygFegUIARC9Ag..i&docid=vDM1xGglVC-0_M&w=1280&h=640&q=masina&ved=2ahUKEwi2-pOw1-X3AhXOt6QKHcC7BJkQMygFegUIARC9Ag"
altForImagine: string = "photo masina"

  constructor(private service: DemoServiceService) { }

  ngOnInit(): void {
  this.service.getPosts().subscribe(rezultat => { this.postList = rezultat} )
    console.log(this.postList)
  }

  clickUtilizator(item){ alert('USER CLICK' + ' pe ' + item)!}

  handelclickfromchild(event){
  alert('User clicked on child with Id:' + event)
  }
}
