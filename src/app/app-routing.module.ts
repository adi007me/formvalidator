import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScanPage } from './scan/scan.page';
import { ApplicationListPage } from './application-list/applicationList.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
      path: 'home',
      component: HomePage
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
  },
  {
      path: 'applications/:listtype',
      component: ApplicationListPage
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
