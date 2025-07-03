import { ChangeDetectionStrategy, Component, OnInit, signal, inject, ApplicationRef, OnDestroy, effect } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonListSkeletonComponent } from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent, RouterLink],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent  {

  public pokemons = signal<SimplePokemon[]>([])
  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);


  public currentPage = toSignal<number>(
     this.route.params.pipe(
      map(params => params['page'] ?? '1'),
      map(page =>(isNaN(+page) ? 1: +page) ),
      map(page => Math.max(1,page))
     )
  );

  public loadOnPageChange = effect(()=>{
    this.loadPokemons(this.currentPage())
  })

  public loadPokemons(page = 0){
    const pageToLoad = this.currentPage()! + page;


    this.pokemonsService.loadPage(pageToLoad)
     .pipe(
      tap(()=>
        this.title.setTitle(`Pokemons SSR - page: ${pageToLoad}`)
      )
     )
     .subscribe(pokemons =>{
       this.pokemons.set(pokemons);
     })
  }

}
