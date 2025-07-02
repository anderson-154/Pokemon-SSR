// pokemon-page.component.ts
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  public pokemon = signal<Pokemon | null>(null);
  public isLoading = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.pokemonsService
      .loadPokemon(id)
      .pipe(
        tap(({ name, id }) => {
          const pageTitle = `#${id} - ${name}`;
          const pageDescription = `Página del Pokémon ${name}`;
          this.title.setTitle(pageTitle);

          this.meta.updateTag({
            name: 'description',
            content: pageDescription,
          });
          this.meta.updateTag({ name: 'og:title', content: pageTitle });
          this.meta.updateTag({
            name: 'og:description',
            content: pageDescription,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          });
        }),
        tap(() => this.isLoading.set(false))
      )
      .subscribe(this.pokemon.set);
  }

  getTypeColor(type: string): string {
    const typeColors: Record<string, string> = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-200',
      fighting: 'bg-red-700',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-300',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-600',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300',
    };
    return typeColors[type] || 'bg-gray-300';
  }
}
