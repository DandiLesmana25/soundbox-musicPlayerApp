import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAlbumPageRoutingModule } from './show-album-routing.module';

import { ShowAlbumPage } from './show-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAlbumPageRoutingModule
  ],
  declarations: [ShowAlbumPage]
})
export class ShowAlbumPageModule {}
