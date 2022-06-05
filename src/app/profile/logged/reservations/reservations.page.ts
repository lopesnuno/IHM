import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  private dataTshirts: any;

  constructor(private router: Router, public routerOutlet: IonRouterOutlet, public actionSheetCtrl: ActionSheetController, public modalController: ModalController) {
    this.dataTshirts = {
      "tshirt-xpto": {
        "id": "1",
        "title": "T-shirt XPTO",
        "price": "35$",
        "desc":"100% Algodão",
        "img":"tshirt-xpto.jpeg",
        "reservationId": "127386123",
        "store":"Braga",
        "size":"6-12"
      },
      "1234": {
        "id": "4",
        "title": "T-shirt Dior",
        "price": "1000$",
        "desc":"50% polyester 50% Algodão",
        "img":"4.jpeg",
        "reservationId": "79837123",
        "store":"Lisboa",
        "size":"6-12"
      }
    }
   }

   public verDetalheTshirt (tshirtkey: string) {
    let infoDaTshirt: NavigationExtras;
    infoDaTshirt = {
      state: {
        dadosTshirt: this.dataTshirts[tshirtkey]
      }
    }
    this.router.navigate(['reservationinfo'], infoDaTshirt);
  }

  ngOnInit() {
  }

}
