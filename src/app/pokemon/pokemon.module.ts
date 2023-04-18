import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroPipe } from './pipes/filtro.pipe';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokemonListComponent,
    FiltroPipe,
    DetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { }
