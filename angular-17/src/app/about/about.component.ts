import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private commonService:CommonService){
    this.commonService.bObj.subscribe((res)=>{
      if(res != '')
        console.log(res);      
    })
  }
  
  recvFromChild(obj:any){
      console.log(obj);      
  }
}
