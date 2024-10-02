import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LjPageRoutingModule } from './lj-routing.module';

import { LjPage } from './lj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LjPageRoutingModule
  ],
  declarations: [LjPage]
})
export class LjPageModule {}
