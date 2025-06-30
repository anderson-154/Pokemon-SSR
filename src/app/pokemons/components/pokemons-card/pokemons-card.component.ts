import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemons-card',
  imports: [],
  templateUrl: './pokemons-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsCardComponent {
  public pokemon = input.required<SimplePokemon>();
  public readonly pokemonImage = computed(()=>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  )

}
