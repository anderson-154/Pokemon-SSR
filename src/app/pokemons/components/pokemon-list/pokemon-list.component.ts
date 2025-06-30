import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonsCardComponent } from "../pokemons-card/pokemons-card.component";
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonsCardComponent],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = input.required<SimplePokemon[]>();
}
