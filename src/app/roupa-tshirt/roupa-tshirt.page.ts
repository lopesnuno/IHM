import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-roupa-tshirt',
  templateUrl: './roupa-tshirt.page.html',
  styleUrls: ['./roupa-tshirt.page.scss'],
})
export class RoupaTshirtPage {

  private dataTshirts: any;

  constructor(private router: Router) {
    this.dataTshirts = {
      "tshirt-xpto": {
        "id": "1",
        "title": "Tshirt XPTO",
        "price": "35$",
        "desc":"100% Algodão",
        "img":"tshirt-xpto.jpeg"
      },
      "tshirt-pxto": {
        "id": "2",
        "title": "Tshirt PXTO",
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
