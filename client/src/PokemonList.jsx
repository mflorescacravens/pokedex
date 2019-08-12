import React from 'react'
import './App.css';

function PokemonList({pokemon, handlePokemonChange}) {
    // var content = pokemon.map((pokemon, id) => {
    //     return  <div>
    //                 <h4 key={id}>{pokemon.name}</h4>
    //             </div>
    // })
    console.log(pokemon[0])

    return (
      <div className="App">
        <h3>All pokemon</h3>
        {/* <h5>{pokemon[0]}</h5> */}
      </div>
    );
  }
  
  export default PokemonList;
  