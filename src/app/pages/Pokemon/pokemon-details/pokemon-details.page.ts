import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular';

import { PokeapiService } from '../../../services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemonId: string;
  pokemon: any = { types: [] };

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private navCtrl: NavController) { }

  
  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
      this.pokemon = pokemon;
    });
  }

  capturar() {
    this.navCtrl.navigateForward('pokeball', { queryParams: { pokemonId: this.pokemonId } });
  }

}
