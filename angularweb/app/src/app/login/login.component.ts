// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName ='eve.holt@reqres.in';
  password ='cityslicka';
  constructor(private common:CommonService,private router:Router){

  }
  login(){
    if(this.userName == ''){
      alert("username shuld not be empty");
  }else if(this.password == ''){
    alert("password shuld not be empty");
  }else{
    // alert("Everything is fine");    
    let data = {
      "email": this.userName,
      "password": this.password
    }
    this.common.post("https://reqres.in/api/login",data).subscribe(
     { 
      next:(res:any)=>{
            localStorage.setItem("token",res['token']);
            this.router.navigateByUrl('home')
      },
      error:()=>{
          alert("Error while login")
      }
    });
  }
}
}
