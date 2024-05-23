import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = '';
  email = '';

  //localhost:4200/about?name=awefwefew&email=wefefe@gmai.com
  constructor(private router:ActivatedRoute){
    this.router.queryParams.subscribe((res)=>{
      console.log(res);      
      this.name = res['name'];
      this.email =  res['email'];
    })
  }
}
