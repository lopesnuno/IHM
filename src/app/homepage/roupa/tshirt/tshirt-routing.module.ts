import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TshirtPage } from './tshirt.page';

const routes: Routes = [
  {
    path: '',
    component: TshirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TshirtPageRoutingModule {}
