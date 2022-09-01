import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon } from './pokemon';

interface PokemonProps{
    pokemonHandler: Function;
}

interface AxiosResults{
    count?: number;
    next?: string;
    previous?: string;
    results: Pokemon[];
}

export const PokemonButtonAxios = (props: PokemonProps) => {
    const [ pokemons, setPokemons ] = useState<AxiosResults>({results: []});

    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then( response => setPokemons(response.data))
    }, []);

    const submitRequest = () => {
        console.log("on submit");
        console.log(pokemons);
        props.pokemonHandler( pokemons.results );
    };
    return(
        <button onClick={ submitRequest }>Fetch Pokemon</button>
    )
}