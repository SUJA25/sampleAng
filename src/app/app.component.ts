// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angularapp';

//   jsonval={name:'Mark',sge:'25',
// address:{a1: 'London',a2:'Australia'}};
// months=["Jan","Feb","Mar","April","May"];
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  constructor(private http:HttpClient){

  }
  ngOnInit():void{

  
  this.http.post('http://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body:'bar',
    userId:1
  })
  .subscribe(
    res =>{
      console.log(res);
    },
    err =>{
        console.log("Error occured");
      });
      this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
      
        {"name":"test1","salary":"2222","age":"23"} )
      
        .subscribe(
          res =>{
            console.log(res);
          },
          err =>{
              console.log("Error occured");
            });
          }
//   ids=[1,2,3,4,5,6,7,8,9];
// }

        }


