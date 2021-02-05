import {useState} from "react";
import {usePokemonContext} from "../context/PokemonContext";
import {fetchPokemon} from "../fetchers/pokemonApi";

export default function NameInput()
{
    const [input, setInput] = useState('');
    const {dispatch} = usePokemonContext();

    return (
        <input
            onKeyDown={e => e.key === 'Enter' && fetchPokemon(input, dispatch)}
            onChange={e => setInput(e.target.value)}
        />
    )
}