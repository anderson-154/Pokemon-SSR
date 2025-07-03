import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Rutas estáticas
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'pricing', renderMode: RenderMode.Prerender },

  // Rutas dinámicas (alternativa más confiable)
  { path: 'pokemons/1', renderMode: RenderMode.Prerender },
  { path: 'pokemons/2', renderMode: RenderMode.Prerender },
  { path: 'pokemons/3', renderMode: RenderMode.Prerender },
  { path: 'pokemons/page/1', renderMode: RenderMode.Prerender },
  { path: 'pokemons/page/2', renderMode: RenderMode.Prerender },

  // Redirección
  { path: '**', renderMode: RenderMode.Client }
];
