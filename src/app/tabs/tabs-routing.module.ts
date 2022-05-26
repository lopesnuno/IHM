import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      },
      {
        path: 'roupa',
        loadChildren: () => import('../roupa/roupa.module').then(m => m.RoupaPageModule)
      },
      {
        path: 'roupa-tshirt',
        loadChildren: () => import('../roupa-tshirt/roupa-tshirt.module').then(m => m.RoupaTshirtPageModule)
      },
      {
        path: 'roupainfo',
        loadChildren: () => import('../roupainfo/roupainfo.module').then(m => m.RoupainfoPageModule)
      },
      {       //TODO: add routes to favorites, cart, profile/login
        path: '',
        redirectTo: 'tabs/homepage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
