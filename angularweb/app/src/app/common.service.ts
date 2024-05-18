import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  get(url:string){
    return this.http.get(url);
  }
  post(url:string,data:{}){
    return this.http.post(url,data);
  }
}
