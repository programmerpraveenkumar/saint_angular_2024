import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public bObj = new BehaviorSubject<any>("");
  BASEURL = 'https://reqres.in/api/';
  constructor(private http:HttpClient) { }
  printMessage(message:string){
    console.log(message);
  }
  publishMessage(msg:any){
      this.bObj.next(msg);//publish message
  }
  get(endPoint:String){
    return this.http.get(this.BASEURL+endPoint)
  }

  post(endPoint:string,params:{}){
    return this.http.post(this.BASEURL+endPoint,params)
  }
  
}
