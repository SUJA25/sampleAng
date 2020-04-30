import { Component, OnInit } from '@angular/core';
import {SharingService} from '../sharing.service';
import {EData} from '../edata';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public response:any;


  constructor(public service:SharingService) {
    this.service.getPosts().subscribe(result=> {
      this.response = result['data'];
      console.log(this.response);
    })
    
   }

  ngOnInit(){}
  
}
