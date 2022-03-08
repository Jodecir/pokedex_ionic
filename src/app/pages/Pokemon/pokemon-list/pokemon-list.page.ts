import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PokeapiService } from './../../../services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  pokedex: any = [];
  query: string;

  constructor(
    public pokeapiService: PokeapiService,
    public router: Router) {
    this.search();
  }

  search() {
    this.pokeapiService.getPokedex().then((data: any) => {
      this.pokedex = data.pokemon_entries;
    });
  }

  ngOnInit() {
  }

  seeMore(pokemonId: string) {
    this.router.navigate([`pokemon-details/${pokemonId}`]);
  }

}
