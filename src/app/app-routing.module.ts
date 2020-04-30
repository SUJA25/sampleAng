import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import{AdminComponent} from'./admin/admin.component'
import { from } from 'rxjs';
// import { ProductComponent } from "./product/product.component";
import {EmployeedetailsComponent} from "./employeedetails/employeedetails.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  // {path:'login',component:LoginComponent},
  // {path:'product',component:ProductComponent},
  {path:'employeedetails',component:EmployeedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }