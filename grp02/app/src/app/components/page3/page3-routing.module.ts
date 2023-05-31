import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PAGE3Page } from './page3.page';

const routes: Routes = [
  {
    path: '',
    component: PAGE3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PAGE3PageRoutingModule {}
