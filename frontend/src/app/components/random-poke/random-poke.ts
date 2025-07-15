import { httpResource} from '@angular/common/http';
import { Component, signal} from '@angular/core';
import { PokemonDetailResponse} from '../../common/models/pokemon';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-random-poke',
  imports: [JsonPipe],
  templateUrl: './random-poke.html',
  styleUrl: './random-poke.scss'
})
export class RandomPoke {

  private randomId = signal(Math.floor(Math.random() * 151) + 1);


  readonly pokeDetailResource = httpResource<PokemonDetailResponse>(() =>
    `https://pokeapi.co/api/v2/pokemon/${this.randomId()}`
  );

  randomizeId() {
    this.randomId.set(Math.floor(Math.random() * 151) + 1);
  }

}
