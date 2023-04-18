import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllPokemonsResponse, Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }

  getAllPokemons(limit: number, offset: number){
    return this.http.get<AllPokemonsResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`)
  }

  getPokemon(name: string){
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
