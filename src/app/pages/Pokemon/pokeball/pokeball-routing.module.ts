import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeballPage } from './pokeball.page';

const routes: Routes = [
  {
    path: '',
    component: PokeballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeballPageRoutingModule {}
