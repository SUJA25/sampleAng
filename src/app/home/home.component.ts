import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id;
observerId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params.id;

    this.route.paramMap.subscribe(params => { this.observerId=params.get('id');})
  }

}
