import React, { useEffect, useState } from 'react';

interface PokemonProps{
    pokemonHandler: Function;
}

export const PokemonButton = (props: PokemonProps) => {
    const [ pokemons, setPokemons ] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then( response => response.json() )
            .then( response => setPokemons(response.results))
    }, []);

    const submitRequest = () => {
        props.pokemonHandler( pokemons );
    };
    return(
        <button onClick={ submitRequest }>Fetch Pokemon</button>
    )
}