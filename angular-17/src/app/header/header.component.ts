import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // below variable will recv the data from parent compoent(homeComponent)
  @Input() currentPage = '';
  constructor(private commonService:CommonService){
    this.commonService.bObj.subscribe((res)=>{
      if(res != '')
        console.log(res);      
    })
    // console.log(this.currentPage);
  }
}
