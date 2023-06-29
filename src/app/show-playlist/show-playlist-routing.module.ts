import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPlaylistPage } from './show-playlist.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPlaylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPlaylistPageRoutingModule {}
