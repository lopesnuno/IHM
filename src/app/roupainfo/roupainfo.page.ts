import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TshirtService } from 'src/services/tshirt.service';

@Component({
  selector: 'app-roupainfo',
  templateUrl: './roupainfo.page.html',
  styleUrls: ['./roupainfo.page.scss'],
})
export class RoupainfoPage implements OnInit {
  public tshirt: any;

  constructor(private tshirtServ: TshirtService, public toastController: ToastController) { }
   
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

  ngOnInit(){
    this.tshirtServ.getInfoTshirts().subscribe(infoTshirt => {
      this.tshirt = infoTshirt;
    });
  }
}

