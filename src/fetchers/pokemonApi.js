import {pokemonInitData} from "../context/PokemonContext";

export function fetchPokemon(identifier, setOtherPokemon)
{
    const url = `https://pokeapi.co/api/v2/pokemon/${identifier}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>
            setOtherPokemon(getPokemonData(data))
        )
        .catch((e) => console.error("catched error: " + e));
}

function getPokemonData(pokemonData)
{
    const {name, id, sprites} = pokemonData;
    return{...pokemonInitData, id, name, picture: sprites?.front_default}
}