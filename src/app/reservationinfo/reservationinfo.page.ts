import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reservationinfo',
  templateUrl: './reservationinfo.page.html',
  styleUrls: ['./reservationinfo.page.scss'],
})
export class ReservationinfoPage {

  public tshirtInfo: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute, public toastController: ToastController) {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.tshirtInfo = this.router.getCurrentNavigation().extras.state.dadosTshirt;
        console.log(this.tshirtInfo);
      }
    })
   }
   
}
