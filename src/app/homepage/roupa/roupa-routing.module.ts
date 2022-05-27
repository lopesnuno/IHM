import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoupaPage } from './roupa.page';

const routes: Routes = [
  {
    path: '',
    component: RoupaPage
  },
  {
    path: 'tshirt',
    loadChildren: () => import('./tshirt/tshirt.module').then( m => m.TshirtPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoupaPageRoutingModule {}
