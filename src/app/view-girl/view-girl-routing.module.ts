import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGirlPage } from './view-girl.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGirlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewGirlPageRoutingModule {}
