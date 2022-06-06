import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController, IonRouterOutlet, ModalController } from '@ionic/angular';

import { TshirtService } from 'src/services/tshirt.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  private tshirts: any;

  constructor(private tshirtServ: TshirtService) { }


  ngOnInit() {
    this.tshirtServ.getTshirts().subscribe(data => {
      this.tshirts = data;
    });
  }

  verTshirt(id: string, rota: string){
    this.tshirtServ.goToRota(id, rota);
  }
}
