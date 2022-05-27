import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoupainfoPageRoutingModule } from './roupainfo-routing.module';

import { RoupainfoPage } from './roupainfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoupainfoPageRoutingModule
  ],
  declarations: [RoupainfoPage]
})
export class RoupainfoPageModule {}

//TODO: Size chart, items availabilty add to cart

