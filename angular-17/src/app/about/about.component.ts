import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessagemodalComponent } from '../messagemodal/messagemodal.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule,MessagemodalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name = '';
  modalMessage = ''
  showModal = false;
  constructor(private commonService:CommonService){
    this.commonService.bObj.subscribe((res)=>{
      if(res != '')
        console.log(res);      
    })
  }
  validate(){
      if(this.name == ''){
        this.showModal = true;
        this.modalMessage = "Name should not be empty!!";
        // alert("")
      }
  }
  
  recvFromChild(obj:any){
      console.log(obj);      
  }
}
