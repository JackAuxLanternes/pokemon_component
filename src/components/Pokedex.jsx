import {PokemonContextProvider} from '../context/PokemonContext';
import {useState} from 'react';

export default function Pokedex({children})
{
    const [otherPokemon, setOtherPokemon] = useState({});
    return(
        <PokemonContextProvider value={{otherPokemon, setOtherPokemon}}>
            Bienvenue dans le pokédex
            <div>
                {children}
            </div>
        </PokemonContextProvider>
    )
}
