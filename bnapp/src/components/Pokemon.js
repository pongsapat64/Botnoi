import React, { useState } from 'react';
import axios from 'axios';

function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const fetchAllPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const pokemonList = response.data.results;
      const detailedPokemons = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return details.data;
        })
      );

      setPokemonDetails(detailedPokemons);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-5">API Pokemon</h1>
      <button
        onClick={fetchAllPokemons}
        className="px-6 py-3 mb-8 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Get Pokemon Dex
      </button>

      <div className="flex flex-wrap justify-center">
        {pokemonDetails.length > 0 &&
          pokemonDetails.map((pokemon, index) => (
            <div
              key={index}
              className="border border-gray-300 p-5 bg-green-200 rounded-lg w-72 m-3 text-left shadow-md"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="mx-2"
                />
                <img
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  className="mx-2"
                />
              </div>
              <h2 className="text-2xl font-semibold uppercase text-center mb-2">
                {pokemon.name}
              </h2>
              <h3 className="text-lg">Type 1: {pokemon.types[0].type.name}</h3>
              {pokemon.types[1] && <h3 className="text-lg">Type 2: {pokemon.types[1].type.name}</h3>}
              <h4 className="mt-3 font-semibold">Base Stats:</h4>
              <ul className="list-none pl-0 mt-2">
                {pokemon.stats.map((stat, statIndex) => (
                  <li key={statIndex} className="text-sm">
                    {stat.stat.name} = {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pokemon;
