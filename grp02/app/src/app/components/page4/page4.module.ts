import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAGE4PageRoutingModule } from './page4-routing.module';

import { PAGE4Page } from './page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAGE4PageRoutingModule
  ],
  declarations: [PAGE4Page]
})
export class PAGE4PageModule {}
