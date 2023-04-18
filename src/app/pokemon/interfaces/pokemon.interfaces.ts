export interface AllPokemonsResponse {
    count: number;
    next: null;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface Pokemon {
    id: string;
    name: string;
    sprites: Sprites;
    stats: Stats[];
    types: Type[];
    weight: number;
    height: number;
}

export interface Sprites {
    back_default?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
    other?: Other;
}

export interface Other {
    home: Home;
}

export interface Home {
    front_default: string;
    front_shiny: string;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Type {
    slot: number;
    type: Species[];
}

export interface Species {
    name: string;
    url: string;
}