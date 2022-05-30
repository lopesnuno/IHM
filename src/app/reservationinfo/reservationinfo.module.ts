import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationinfoPageRoutingModule } from './reservationinfo-routing.module';

import { ReservationinfoPage } from './reservationinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationinfoPageRoutingModule
  ],
  declarations: [ReservationinfoPage]
})
export class ReservationinfoPageModule {}
