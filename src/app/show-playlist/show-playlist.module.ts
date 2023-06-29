import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPlaylistPageRoutingModule } from './show-playlist-routing.module';

import { ShowPlaylistPage } from './show-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPlaylistPageRoutingModule
  ],
  declarations: [ShowPlaylistPage]
})
export class ShowPlaylistPageModule {}
