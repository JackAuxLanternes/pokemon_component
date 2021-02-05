import './App.css';
import Pokedex from "./components/Pokedex";
import PokemonPicture from './components/PokemonPicture';
import PokemonInput from './components/PokemonNameInput';

function App() {
  return (
    <div className="App">
      <Pokedex>
        <PokemonPicture/>
        <PokemonInput/>
      </Pokedex>
    </div>
  );
}

export default App;
