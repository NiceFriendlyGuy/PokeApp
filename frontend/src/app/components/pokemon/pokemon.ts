import { httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { PokemonDetailResponse } from '../../common/models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [JsonPipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss'
})
export class Pokemon {

  private route = inject(ActivatedRoute);

  id = signal(this.route.snapshot.paramMap.get('id'));


  readonly pokeDetailResource = httpResource<PokemonDetailResponse>(() => {
    const id = this.id();
    return id ? `https://pokeapi.co/api/v2/pokemon/${id}` : undefined;
  });
}
