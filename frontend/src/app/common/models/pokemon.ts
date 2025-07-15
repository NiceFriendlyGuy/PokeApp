export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

export interface PokemonDetailResponse {
    id: number;
    name: string;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    sprites: {
        front_default: string;
        [key: string]: any;
    };
}