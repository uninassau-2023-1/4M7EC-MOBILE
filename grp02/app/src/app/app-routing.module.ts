import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'page2',
    loadChildren: () => import('./components/page2/page2.module').then( m => m.PAGE2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./components/page3/page3.module').then( m => m.PAGE3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./components/page4/page4.module').then( m => m.PAGE4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
