import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userList:any = [];
  constructor(private common:CommonService,private router:ActivatedRoute){
    this.router.params.subscribe(res=>{
        console.log(res['username']);
    })
    //can use httpClient also
      // this.common.get("https://reqres.in/api/users?page=2")
      // .subscribe((res:any)=>{
      //   this.userList = res['data'];
      // })
      this.common.get("https://reqres.in/api/users?page=2")
      .subscribe( {
          next:(res:any)=>{
            this.userList = res['data'];            
          },error:()=>{
  
          }
      })
  }  
} 
