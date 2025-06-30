import { ChangeDetectionStrategy, Component, OnInit, signal, inject, ApplicationRef, OnDestroy } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit{

  private pokemonsService = inject(PokemonsService);
  public isLoading = signal(true);
  // private appRef = inject(ApplicationRef);

  // private $appState = this.appRef.isStable.subscribe( isStable =>{
  // console.log(isStable);

  // });

  ngOnInit(): void {
    this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(false)
    // }, 5000);
  }

  public loadPokemons(page = 0){
    this.pokemonsService.loadPage(page)
     .subscribe(pokemons =>{

     })
  }
  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }

}
