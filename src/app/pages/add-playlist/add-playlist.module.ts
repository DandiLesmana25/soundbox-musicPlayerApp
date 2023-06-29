import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPlaylistPageRoutingModule } from './add-playlist-routing.module';

import { AddPlaylistPage } from './add-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPlaylistPageRoutingModule
  ],
  declarations: [AddPlaylistPage]
})
export class AddPlaylistPageModule {}
