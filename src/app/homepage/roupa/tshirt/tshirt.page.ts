import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';

import { TshirtService } from 'src/services/tshirt.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.page.html',
  styleUrls: ['./tshirt.page.scss'],
})

export class TshirtPage implements OnInit {

  private tshirts: any;

  constructor(private tshirtServ: TshirtService, public actionSheetCtrl: ActionSheetController, public modalController: ModalController) { }

  async showModal() {
    const modal = await this.modalController.create({
      component: ''
    })
    await modal.present();
  }

  ngOnInit(){
    this.tshirtServ.getTshirts().subscribe(data => {
      this.tshirts = data;
    });
  }

  verTshirt(id: string, rota: string){
    this.tshirtServ.goToRota(id, rota);
  }
}

