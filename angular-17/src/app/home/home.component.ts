import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
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
  nameList = ['test','test2','test3'];
  //constrctor injection
  constructor(private http:HttpClient){
    this.getUser();
  }
  getUser(){
    this.http.get("https://reqres.in/api/users?page=2").subscribe((res:any)=>{
        this.userlist = res['data'];  
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
      this.http.post("https://reqres.in/api/login",data).subscribe(
        (res:any)=>{
          //for success response
          console.log(res);        
        },err=>{
          //for error response
          console.log(err['error']);          
        }
    )
    }
  }
}
