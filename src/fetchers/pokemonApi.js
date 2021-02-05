export function fetchPokemon(identifier, dispatch)
{
    const url = `https://pokeapi.co/api/v2/pokemon/${identifier}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>
            dispatch({action: "setPokemon", params: {pokemon: data}})
        )
        .catch((e) => console.error("catched error: " + e));
}