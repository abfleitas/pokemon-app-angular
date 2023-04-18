import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  pokeDetails: Pokemon = {
    id: '',
    name: '',
    weight: 0,
    height: 0,
    stats: [],
    types: [],
    sprites: {
      front_default: '',
    },
  };

  constructor(private route: ActivatedRoute, private detailPokemon: PokemonService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.getDetailPokemon(params.id);
    });
  }

  getDetailPokemon(id: string){
    this.detailPokemon.getPokemon(id).subscribe((res: any) => {
      this.pokeDetails = {
        id: res.id,
        name: res.name,
        sprites: res.sprites.other.home.front_default,
        stats: res.stats,
        types: res.types.map((t: any) => t.type.name),
        weight: res.weight,
        height: res.height
      };
    })
  }

}
