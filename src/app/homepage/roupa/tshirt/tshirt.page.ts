import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.page.html',
  styleUrls: ['./tshirt.page.scss'],
})

export class TshirtPage {

  private dataTshirts: any;

  constructor(private router: Router, public routerOutlet: IonRouterOutlet, public actionSheetCtrl: ActionSheetController, public modalController: ModalController) {
    this.dataTshirts = {
      "tshirt-xpto": {
        "id": "1",
        "title": "T-shirt XPTO",
        "price": "35$",
        "desc":"100% Algodão",
        "img":"tshirt-xpto.jpeg"
      },
      "tshirt-pxto": {
        "id": "2",
        "title": "T-shirt PXTO",
        "price": "99$",
        "desc":"50% polyester 50% Algodão",
        "img":"tshirt-pxto.webp"
      },
      "123": {
        "id": "3",
        "title": "T-shirt PXTO",
        "price": "99$",
        "desc":"50% polyester 50% Algodão",
        "img":"123.webp"
      },
      "1234": {
        "id": "4",
        "title": "T-shirt PXTO",
        "price": "99$",
        "desc":"50% polyester 50% Algodão",
        "img":"4.webp"
      },
    }
   }

  public verDetalheTshirt (tshirtkey: string) {
    let infoDaTshirt: NavigationExtras;
    infoDaTshirt = {
      state: {
        dadosTshirt: this.dataTshirts[tshirtkey]
      }
    }
    this.router.navigate(['roupainfo'], infoDaTshirt);
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: 'nigger'
    })
    await modal.present();
  }

}

