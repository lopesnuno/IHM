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
        loadChildren: () => import('../homepage/roupa/roupa.module').then(m => m.RoupaPageModule)
      },
      {
        path: 'tshirt',
        loadChildren: () => import('../homepage/roupa/tshirt/tshirt.module').then(m => m.TshirtPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      
      {
        path: 'favourits',
        loadChildren: () => import('../favourits/favourits.module').then(m => m.FavouritsPageModule)
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
