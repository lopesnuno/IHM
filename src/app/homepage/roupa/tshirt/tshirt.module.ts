import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TshirtPageRoutingModule } from './tshirt-routing.module';

import { TshirtPage } from './tshirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TshirtPageRoutingModule
  ],
  declarations: [TshirtPage]
})
export class TshirtPageModule {}
