import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAGE2PageRoutingModule } from './page2-routing.module';

import { PAGE2Page } from './page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAGE2PageRoutingModule
  ],
  declarations: [PAGE2Page]
})
export class PAGE2PageModule {}
