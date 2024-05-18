import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      message: ['',[Validators.required,Validators.minLength(15),Validators.maxLength(30)]],
    });
      //  console.log('Valid?', this.myForm.valid); // true or false
  console.log('form details ', this.myForm); 
  }
  onSubmit() {
  //  console.log('Valid?', this.myForm.valid); // true or false
  console.log('form details ', this.myForm); // true or false
    console.log('Name', this.myForm.value.name);
    console.log('Email', this.myForm.value.email);
    console.log('Message', this.myForm.value.message);
  }
}