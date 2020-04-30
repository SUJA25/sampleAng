import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IData} from './IData';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpc:HttpClient)
   { 

   }
   public getPosts():Observable<IData[]>
   {
     return this.httpc.get<IData[]>
     ('https://jsonplaceholder.typicode.com/posts');
   }
  }