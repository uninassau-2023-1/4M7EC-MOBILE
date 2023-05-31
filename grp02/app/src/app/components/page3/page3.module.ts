import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAGE3PageRoutingModule } from './page3-routing.module';

import { PAGE3Page } from './page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAGE3PageRoutingModule
  ],
  declarations: [PAGE3Page]
})
export class PAGE3PageModule {}
