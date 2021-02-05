import {usePokemonContext} from '../context/PokemonContext'

export default function PokemonPicture()
{
    const {otherPokemon} = usePokemonContext();

    return <img alt="pokemonFigure" src={otherPokemon.picture}/>
}