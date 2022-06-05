import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';
import { TshirtService } from 'src/services/tshirt.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.page.html',
  styleUrls: ['./tshirt.page.scss'],
})

export class TshirtPage implements OnInit {

  private tshirt: any;

  constructor(private tshirtServ: TshirtService, public actionSheetCtrl: ActionSheetController, public modalController: ModalController) { }

  async showModal() {
    const modal = await this.modalController.create({
      component: ''
    })
    await modal.present();
  }

  ngOnInit(){
    this.tshirtServ.getInfoTshirts().subscribe(data => {
      this.tshirt = data;
    });
  }

  verTshirt(id: string){
    this.tshirtServ.goToRota(id);
  }
}

