import {useState} from "react";
import {usePokemonContext} from "../context/PokemonContext";
import {fetchPokemon} from "../fetchers/pokemonApi";

export default function NameInput()
{
    const [input, setInput] = useState('');
    const {setOtherPokemon} = usePokemonContext();

    return (
        <input
            onKeyDown={e => e.key === 'Enter' && fetchPokemon(input, setOtherPokemon)}
            onChange={e => setInput(e.target.value)}
        />
    )
}