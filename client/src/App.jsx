import React, {useState, useEffect, useLayoutEffect} from 'react';
import './App.css';
import PokemonList from './PokemonList';
import PokemonShow from './PokemonShow';
import axios from 'axios';

function App() {
  
  const [pokemon, setPokemon] = useState({})
  const [pokemonId, setPokemonId] = useState(1)
  const [indPokemon, setIndPokemon] = useState({})

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150').then((response) => {
      setPokemon(response.data.results);
      // console.log(response.data.results)
    })
  }, [])

  // useEffect( () => {
  //   console.log('running the second effect for individual pokemon')
  //   axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonId).then((response) => {
  //     setIndPokemon(response.data)
  //   })
  // }, [pokemonId])

  return (
    <div className="App">
      <h1>My Pokedex 🔘</h1>
      <PokemonList pokemon={pokemon} handlePokemonChange={setPokemon}/>
      <PokemonShow indPokemon={pokemon} />
    </div>
  );
}

export default App;
