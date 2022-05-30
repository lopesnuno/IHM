import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  editContactForm: FormGroup;
  isSubmited: boolean;

  constructor(public formBuilder: FormBuilder, public toastController: ToastController) {
    this.isSubmited = false;
   }

  ngOnInit() {
    this.editContactForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      numberC: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
    });
  } 

  get number(){
    return this.editContactForm.get('number');
  }

  get numberC(){
    return this.editContactForm.get('numberC');
  }

  submitForm(){
    this.isSubmited = true;
    if(!this.editContactForm.valid){
      return false;
    } else {
      console.log(this.editContactForm.value);
    }
  }

  get formControls(){
    return this.editContactForm.controls;
  }

  public async presentToast() {
    const toast = await this.toastController.create({
      message: 'Foi enviada uma mensagem de confiramção para o seu e-mail.',
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}
