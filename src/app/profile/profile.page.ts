import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  loginForm: FormGroup;
  isSubmited: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isSubmited = false;
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submitForm(){
    this.isSubmited = true;
    if(!this.loginForm.valid){
      return false;
    } else {
      console.log(this.loginForm.value);
    }
  }

  get formControls(){
    return this.loginForm.controls;
  }

}
