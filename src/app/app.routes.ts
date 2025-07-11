import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/:id',
    loadComponent: ()=> import('./pages/pokemon/pokemon-page.component')
  },
  {
    path: 'pokemons/page/:page',
    loadComponent: ()=> import('./pages/pokemons-page/pokemons-page.component')
  },
  {
    path: 'about',
    loadComponent: ()=> import('./pages/about/about-page.component')
  },
  {
    path: 'contact',
    loadComponent: ()=> import('./pages/contact/contact-page.component')
  },
  {
    path: 'pricing',
    loadComponent: ()=> import('./pages/pricing/pricing-page.component')
  },
  {
    path: '**',
    redirectTo: ()=> {
      return 'pokemons'
    }
  }
];
