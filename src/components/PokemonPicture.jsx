import {usePokemonContext} from '../context/PokemonContext'

export default function PokemonPicture()
{
    const {pokemon} = usePokemonContext();

    return <img alt="pokemonFigure" src={pokemon.picture}/>
}