import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {BASEURL} from './AppConstants';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public bObj = new BehaviorSubject<any>("");
  // BASEURL = 'https://reqres.in/api/';
  constructor(private http:HttpClient) { 
    console.log(BASEURL);
    
  }
  printMessage(message:string){
    console.log(message);
  }
  publishMessage(msg:any){
      this.bObj.next(msg);//publish message
  }
  getToken(){
   return ""+localStorage.getItem('token');
  }
  getHeader(){
    return new HttpHeaders().set("token",this.getToken());
  }
  get(endPoint:String){
    return this.http.get(BASEURL+endPoint,{headers:this.getHeader()})
  }

  post(endPoint:string,params:{}){
    return this.http.post(BASEURL+endPoint,params,{headers:this.getHeader()})
  }
  
}
