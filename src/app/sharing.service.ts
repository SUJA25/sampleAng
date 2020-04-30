import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EData} from './EData';
import {Observable,observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private http:HttpClient)
  { 

  }
  public getPosts():Observable<any[]>
  {
    return this.http.get<any[]>
    ('https://dummy.restapiexample.com/api/v1/employees');
  }
 }
