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
        "store":"Viana do Castelo"
      },
      "tshirt-pxto": {
        "id": "2",
        "title": "T-shirt PXTO",
        "price": "99$",
        "desc":"50% polyester 50% Algodão",
        "img":"tshirt-pxto.webp",
        "reservationId": "17236123",
        "store":"Braga"
      },
      "123": {
        "id": "3",
        "title": "T-shirt Kenzo",
        "price": "2500$",
        "desc":"50% polyester 50% Algodão",
        "img":"123.jpeg",
        "reservationId": "8818236912",
        "store":"Porto"
      },
      "1234": {
        "id": "4",
        "title": "T-shirt Dior",
        "price": "1000$",
        "desc":"50% polyester 50% Algodão",
        "img":"4.jpeg",
        "reservationId": "79837123",
        "store":"Lisboa"
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
    this.router.navigate(['reservationinfo'], infoDaTshirt);
  }

  ngOnInit() {
  }

}
