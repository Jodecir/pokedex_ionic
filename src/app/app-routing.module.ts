import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon-list',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./pages/Pokemon/pokemon-list/pokemon-list.module').then( m => m.PokemonListPageModule)
  },
  {
    path: 'pokemon-details/:id',
    loadChildren: () => import('./pages/Pokemon/pokemon-details/pokemon-details.module').then( m => m.PokemonDetailsPageModule)
  },
  {
    path: 'pokeball',
    loadChildren: () => import('./pages/Pokemon/pokeball/pokeball.module').then( m => m.PokeballPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
