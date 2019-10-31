import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScanPage } from './scan/scan.page';
import { ApplicationListPage } from './application-list/applicationList.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
  },
  {
      path: 'applications/:listtype',
      component: ApplicationListPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
