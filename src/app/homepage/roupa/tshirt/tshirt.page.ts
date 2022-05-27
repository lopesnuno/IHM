import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.page.html',
  styleUrls: ['./tshirt.page.scss'],
})

export class TshirtPage {

  private dataTshirts: any;

  constructor(private router: Router) {
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

}

