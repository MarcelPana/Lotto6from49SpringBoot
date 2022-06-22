import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';





@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() listOfPostsFromService:any[];
  @Output() usrClickedOnPost = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  handleClickOnPost(id){
    this.usrClickedOnPost.emit(id)
  }
}
