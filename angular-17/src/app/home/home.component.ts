import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { SqrtPipe } from '../sqrt.pipe';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { NameFilterPipe } from '../name-filter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,SqrtPipe,UpperCasePipe,DatePipe,CurrencyPipe,NameFilterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pageName ='Login form';
  registerPage ="Register Form";
  userName ='';
  password ='';
  show = false;
  userlist:any = [];
  population = 10;
  name = '';
  pageNo = "1";
  price = 10;
  currentDate = new Date();
  nameList = ['test','test2','test3','animal','abc','zoo','zebra','cat'];
  //constrctor injection
  constructor(private common:CommonService){
    this.getUser();
  }
  changPageNo(){
    this.getUser();
  }
  getUser(){
    this.common.get("users?page="+this.pageNo).subscribe((res:any)=>{
        this.userlist = res['data'];
        this.common.printMessage(res);  
      }
    )
  }
  nameDetails = [
    {"name":"awef","mobile":46564,'address':'sample address'},
    {"name":"rtyert","mobile":6788,'address':''},
    {"name":"vdvbx","mobile":12312,'address':''}
  ]
  login_btn(){
    if(this.userName == ''){
        alert("username shuld not be empty");
    }else if(this.password == ''){
      alert("password shuld not be empty");
    }else{
      alert("Everything is fine");    
      let data = {
        "email": this.userName,
        "password": this.password
      }
      this.common.post("login",data).subscribe(
        (res:any)=>{
          //for success response
         this.common.printMessage(res);
        },err=>{
          //for error response
          this.common.printMessage(err['error']);
        }
    )
    }
  }
}
