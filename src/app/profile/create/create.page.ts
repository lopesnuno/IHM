import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createForm: FormGroup;
  isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.isSubmitted = false;
   }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
   });
  }

  get name(){
    return this.createForm.get('name');
  }

  get surname(){
    return this.createForm.get('surname');
  }

  get email(){
    return this.createForm.get('email');
  }

  get password(){
    return this.createForm.get('password');
  }

  get cellphone(){
    return this.createForm.get('cellphone');
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.createForm.valid){
      return false;
    } else {
      console.log(this.createForm.value);
    }
  }

  get formControls(){
    return this.createForm.controls;
  }

}
