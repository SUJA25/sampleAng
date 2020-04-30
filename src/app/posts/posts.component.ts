import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {IData} from '../idata';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
  public response:Observable<IData[]>;


  constructor(public service:SharedService) {
    this.response=this.service.getPosts();
   }

  ngOnInit() {
  }

}
