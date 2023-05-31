import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGE2Page } from './page2.page';

const routes: Routes = [
  {
    path: '',
    component: PAGE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAGE2PageRoutingModule {}
