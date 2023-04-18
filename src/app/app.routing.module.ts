import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { DetailComponent } from './pokemon/detail/detail.component';

const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'pokedex/:id', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}