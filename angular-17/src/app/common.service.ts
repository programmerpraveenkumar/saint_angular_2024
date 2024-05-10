import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  BASEURL = 'https://reqres.in/api/';
  constructor(private http:HttpClient) { }
  printMessage(message:string){
    console.log(message);
  }

  get(endPoint:String){
    return this.http.get(this.BASEURL+endPoint)
  }

  post(endPoint:string,params:{}){
    return this.http.post(this.BASEURL+endPoint,params)
  }
  
}
