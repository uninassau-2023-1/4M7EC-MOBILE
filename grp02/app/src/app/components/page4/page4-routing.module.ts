import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGE4Page } from './page4.page';

const routes: Routes = [
  {
    path: '',
    component: PAGE4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAGE4PageRoutingModule {}
