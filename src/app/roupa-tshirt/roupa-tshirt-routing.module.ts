import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoupaTshirtPage } from './roupa-tshirt.page';

const routes: Routes = [
  {
    path: '',
    component: RoupaTshirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoupaTshirtPageRoutingModule {}
