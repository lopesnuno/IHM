import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {

  private tshirts: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getTshirts() {
    return new Observable (observer => {
      fetch('./assets/data/tshirts.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.tshirts = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoTshirt() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.tshirt);
          observer.complete();
        }
      });
    });
  }

  goToRota(id: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        tshirt: this.tshirts[id]
      }
    };
    this.router.navigate([rota], extras);
  }
}
