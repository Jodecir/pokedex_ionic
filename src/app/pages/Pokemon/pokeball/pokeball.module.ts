import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeballPageRoutingModule } from './pokeball-routing.module';

import { PokeballPage } from './pokeball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeballPageRoutingModule
  ],
  declarations: [PokeballPage]
})
export class PokeballPageModule {}
