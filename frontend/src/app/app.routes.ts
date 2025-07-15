import { Routes } from '@angular/router';
import { RandomPoke } from './components/random-poke/random-poke';

export const routes: Routes = [
    {
        path: '',
        component: RandomPoke,
    },
    {
        path: 'list',
        loadComponent: () =>
            import('./components/poke-list/poke-list').then(c => c.PokeList),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./components/pokemon/pokemon').then(c => c.Pokemon),
    },
];
