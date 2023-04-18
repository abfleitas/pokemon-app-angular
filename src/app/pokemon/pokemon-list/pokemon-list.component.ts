import { Component, OnInit } from '@angular/core';
import { Pokemon, Result } from '../interfaces/pokemon.interfaces';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  page: number = 1;
  itemsPerPage: number = 8;
  totalPokemons: any;
  search: string= "";

  constructor(private pokemonService: PokemonService, private router: Router) {}

  getPokemon(){
    this.pokemonService.getAllPokemons(151, 0)
      .subscribe( (response: any) => {
        response.results.forEach((resp: any) => {
          this.pokemonService.getPokemon(resp.name).subscribe((res: any) => {
            this.pokemons.push({
              id: res.id,
              name: res.name,
              sprites: res.sprites.other.home.front_default,
              stats: res.stats,
              types: res.types.map((t: any) => t.type.name),
              weight: res.weight,
              height: res.height
            });
          });
          this.totalPokemons = resp.length;
        })
      })
  }

  toNavigate(id: any){
    this.router.navigate(['pokedex', id]);
  }

  onSearchPokemon(search: string){
    this.search = search;
  }

  ngOnInit(): void {
    this.getPokemon();
  }
}
