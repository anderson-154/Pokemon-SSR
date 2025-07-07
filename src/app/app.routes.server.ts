import { RenderMode, ServerRoute } from '@angular/ssr';

// app.routes.server.ts
export const serverRoutes: ServerRoute[] = [
  // Rutas estáticas genéricas
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'pricing', renderMode: RenderMode.Prerender },

  // Rutas dinámicas (sin especificar valores concretos)
  { path: 'pokemons/:id', renderMode: RenderMode.Prerender },
  { path: 'pokemons/page/:page', renderMode: RenderMode.Prerender },

  // Redirección
  { path: '**', renderMode: RenderMode.Client }
];
