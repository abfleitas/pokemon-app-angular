import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], search: string = ''): Pokemon[] {
   
   if(search.length === 0) return pokemons;
   const filtered = pokemons.filter( poke => poke.name.includes(search));
   return filtered;
  }

}
