import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nume: string;
  prenume: string;
  mesaj: string;

  constructor() { }

  ngOnInit(): void {
  }

  saveMesage(): void{
    alert("Nume: " + this.prenume + "Prenume" + this.prenume + "Mesaj" + this.mesaj)
  }
}
