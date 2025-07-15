import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { PokemonListResponse } from '../../common/models/pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  imports: [RouterModule],
  templateUrl: './poke-list.html',
  styleUrl: './poke-list.scss'
})
export class PokeList {
  readonly pokeResource = httpResource<PokemonListResponse>(() =>
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  getPokeId(url: string): number {
    return Number(url.split('/').filter(Boolean).pop());
  }

}
