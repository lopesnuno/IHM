import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { TshirtService } from 'src/services/tshirt.service';

@Component({
  selector: 'app-reservationinfo',
  templateUrl: './reservationinfo.page.html',
  styleUrls: ['./reservationinfo.page.scss'],
})
export class ReservationinfoPage implements OnInit {

  public tshirt: any;

  constructor(private tshirtServ: TshirtService) { }

  ngOnInit(){
    this.tshirtServ.getInfoTshirt().subscribe(infoTshirt => {
      this.tshirt = infoTshirt;
    });
  }
   
}
