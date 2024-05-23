import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
userDetail:any={};
message = '';
  constructor(private router:ActivatedRoute,private http:CommonService){
    this.router.queryParams.subscribe((res)=>{
      console.log(res);     
      this.getUserDetail(res['user_id']) 
    })
  }
  getUserDetail(user_id:string){
    //https://reqres.in/api/users/3
    this.http.get("https://reqres.in/api/users/"+user_id).subscribe({
      next:(res:any)=>{
        this.userDetail = res['data'];
        // console.log(res);      
      },error:(err)=>{
        if(err.status == '404'){
          this.message = "No Detail found";
        }else{
          this.message = err;
        }
         console.log(err);
      } 
    }
  );
  }
}
