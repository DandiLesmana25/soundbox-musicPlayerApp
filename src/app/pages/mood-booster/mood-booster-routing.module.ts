import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodBoosterPage } from './mood-booster.page';

const routes: Routes = [
  {
    path: '',
    component: MoodBoosterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodBoosterPageRoutingModule {}
