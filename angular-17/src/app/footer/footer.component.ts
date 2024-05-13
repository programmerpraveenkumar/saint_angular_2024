import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  //send the data to parent component
  @Output() toParent = new EventEmitter();
  username = '';
  password = '';
  constructor(private common:CommonService){

  }

  sendData(){
    this.toParent.next({"uname":this.username,"password":this.password});
  }
  publishData(){
    this.common.publishMessage("from footer via behaviorSubject");
  }

}
