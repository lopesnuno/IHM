import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedPage } from './logged.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedPage
  },  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedPageRoutingModule {}
