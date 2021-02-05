import {PokemonContextProvider, pokemonInitData} from '../context/PokemonContext';
import {useReducer} from 'react';

const pokemonStateReducer = (state, {action, params}) => {
    switch (action)
    {
        case "setPokemon":
            const {pokemon} = params;
            return ({...state, ...getPokemonData(pokemon)});

        default:
            throw new Error('action undifined');
    }
}

function getPokemonData(pokemonData)
{
    const {name, id, sprites} = pokemonData;
    return{...pokemonInitData, id, name, picture: sprites?.front_default}
}

export default function Pokedex({children})
{
    const [pokemon, dispatch] = useReducer(pokemonStateReducer, pokemonInitData);
    return(
        <PokemonContextProvider value={{pokemon, dispatch}}>
            Bienvenue dans le pokédex
            <div>
                {children}
            </div>
        </PokemonContextProvider>
    )
}
