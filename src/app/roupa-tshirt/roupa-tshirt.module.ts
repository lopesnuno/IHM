import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoupaTshirtPageRoutingModule } from './roupa-tshirt-routing.module';

import { RoupaTshirtPage } from './roupa-tshirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoupaTshirtPageRoutingModule
  ],
  declarations: [RoupaTshirtPage]
})
export class RoupaTshirtPageModule {}
