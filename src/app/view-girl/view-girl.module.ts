import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewGirlPageRoutingModule } from './view-girl-routing.module';

import { ViewGirlPage } from './view-girl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGirlPageRoutingModule
  ],
  declarations: [ViewGirlPage]
})
export class ViewGirlPageModule {}
