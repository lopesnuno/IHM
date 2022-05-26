import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },  
  {
    path: 'roupa',
    loadChildren: () => import('./roupa/roupa.module').then( m => m.RoupaPageModule)
  },
  {
    path: 'roupa-tshirt',
    loadChildren: () => import('./roupa-tshirt/roupa-tshirt.module').then( m => m.RoupaTshirtPageModule)
  },
  {
    path: 'roupainfo',
    loadChildren: () => import('./roupainfo/roupainfo.module').then( m => m.RoupainfoPageModule)
  },
    //TODO: add routes to favorites, cart, profile/login
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
