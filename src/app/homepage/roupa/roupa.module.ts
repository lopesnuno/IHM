import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoupaPageRoutingModule } from './roupa-routing.module';

import { RoupaPage } from './roupa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoupaPageRoutingModule
  ],
  declarations: [RoupaPage]
})
export class RoupaPageModule {}
