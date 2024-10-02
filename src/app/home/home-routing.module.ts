import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, {
    path: 'view-girl',
    loadChildren: () => import('../view-girl/view-girl.module').then( m => m.ViewGirlPageModule)
  },
  {
    path: 'lj',
    loadChildren: () => import('../lj/lj.module').then( m => m.LjPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
