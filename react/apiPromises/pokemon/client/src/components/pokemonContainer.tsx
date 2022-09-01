import React, { useState } from 'react';
import { Pokemon } from './pokemon';
import { PokemonButtonAxios } from './pokemonButtonAxios';
import { PokemonDisplay } from './pokemonDisplay';


export const PokemonContainer = () => {
    const [pokemons, setPokemons ] = useState([""]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const pokemonHandler = ( apiPokemons: Pokemon[] ) => {
        console.log(apiPokemons);
        setPokemons( apiPokemons.map( ({name}) => name ) );
        setIsSubmitted(true);
    }

    return(
        <>
            <PokemonButtonAxios pokemonHandler={pokemonHandler}></PokemonButtonAxios>
            <PokemonDisplay pokemons={pokemons} isSubmitted={isSubmitted}></PokemonDisplay>
        </>
        )
}