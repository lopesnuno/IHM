import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritsPageRoutingModule } from './favourits-routing.module';

import { FavouritsPage } from './favourits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritsPageRoutingModule
  ],
  declarations: [FavouritsPage]
})
export class FavouritsPageModule {}
