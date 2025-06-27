import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokemonsCardComponent } from "../pokemons-card/pokemons-card.component";

@Component({
  selector: 'pokemon-list',
  imports: [PokemonsCardComponent],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent { }
