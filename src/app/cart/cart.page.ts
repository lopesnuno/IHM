import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  constructor(public toastController: ToastController) { }

  public async presentToast() {
    const toast = await this.toastController.create({
      message: 'Reserva efetuada com sucesso. Verifique na sua página de cliente.',
      duration: 2500,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }


}
