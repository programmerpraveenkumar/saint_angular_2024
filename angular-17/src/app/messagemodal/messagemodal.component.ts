import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messagemodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messagemodal.component.html',
  styleUrl: './messagemodal.component.css'
})
export class MessagemodalComponent {
  @Input() showModal =  false;
  @Input() modalMessage = '';
}
