import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-roupainfo',
  templateUrl: './roupainfo.page.html',
  styleUrls: ['./roupainfo.page.scss'],
})
export class RoupainfoPage {
  public tshirtInfo: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute, public toastController: ToastController) {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tshirtInfo = this.router.getCurrentNavigation().extras.state.dadosTshirt;
        console.log(this.tshirtInfo);
      }
    })
   }
   
  public async presentToast() {
    const toast = await this.toastController.create({
      message: 'Artigo adicionado aos favoritos.',
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

  public async presentToastAdd() {
    const toast = await this.toastController.create({
      message: 'Artigo adicionado ao carrinho.',
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present();
  }

}

