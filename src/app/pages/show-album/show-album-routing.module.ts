import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowAlbumPage } from './show-album.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowAlbumPageRoutingModule {}
