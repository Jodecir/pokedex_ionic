import { Component, OnInit } from '@angular/core';

import { PokeapiService } from './../../../../services/pokeapi/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  pokedex: any = [];
  query: string;

  /**
   *
   * @param pokeapiService
   * @param router
   */
  constructor(public pokeapiService: PokeapiService,
              public router: Router) {

    this.search();

  }

  /**
   *
   */
  search() {

    this.pokeapiService.getPokedex().then((data: any) => {
      this.pokedex = data.pokemon_entries;
    });

  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   *
   * @param pokemonId
   */
  seeMore(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }

}
