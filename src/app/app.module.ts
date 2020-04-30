import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { ProductComponent } from "./product/product.component";

import { PostsComponent } from './posts/posts.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    
    PostsComponent,
    
    EmployeedetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }