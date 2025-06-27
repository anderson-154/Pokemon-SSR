import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemons-card',
  imports: [],
  templateUrl: './pokemons-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonsCardComponent { }
