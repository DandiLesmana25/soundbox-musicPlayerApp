import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodBoosterPageRoutingModule } from './mood-booster-routing.module';

import { MoodBoosterPage } from './mood-booster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodBoosterPageRoutingModule
  ],
  declarations: [MoodBoosterPage]
})
export class MoodBoosterPageModule {}
