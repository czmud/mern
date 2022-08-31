import React from 'react';

interface PokemonProps{
    pokemons: string[];
    isSubmitted: boolean;
}

export const PokemonDisplay = (props: PokemonProps ) => {

    return(
        <>
        { props.isSubmitted ?
        <ul>
            { props.pokemons.map( (pokemon, i) => <li key={ i }>{ pokemon }</li>)}
        </ul>
    : "" }
    </>
    )
}