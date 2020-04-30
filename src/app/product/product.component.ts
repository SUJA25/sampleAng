import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route:AuthserviceService,private router:Router) { }
  logout(){
    this.route.logout()
    this.router.navigateByUrl('login')
  }
productlist=[
  {name:'chips',manufdate:22/2/2015,expdate:1/8/2015,brand:'lays',price:10},
  {name:'bread',manufdate:22/2/2015,expdate:1/8/2015,brand:'modern',price:10},
  {name:'fantasy',manufdate:22/2/2015,expdate:1/8/2015,brand:'sun',price:10},
  {name:'chips',manufdate:22/2/2015,expdate:1/8/2015,brand:'lays',price:10},
  {name:'chips',manufdate:22/2/2015,expdate:1/8/2015,brand:'lays',price:10}
]
  ngOnInit(): void {
  }

}







