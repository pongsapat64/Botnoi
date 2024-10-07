import React, { useState } from 'react';
import axios from 'axios';

function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState([]); // ตัวแปรสำหรับเก็บข้อมูลโปเกมอนทั้งหมด

  // ฟังก์ชันดึงข้อมูลโปเกมอนทั้งหมด 151 ตัวจาก API
  const fetchAllPokemons = async () => {
    try {
      // ดึงรายชื่อโปเกมอนทั้งหมด 151 ตัว
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
      const pokemonList = response.data.results;

      // ดึงข้อมูลแบบละเอียดของโปเกมอนทั้งหมด 151 ตัว
      const detailedPokemons = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return details.data;
        })
      );

      setPokemonDetails(detailedPokemons); // เก็บข้อมูลแบบละเอียดทั้งหมดใน state
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>API Pokemon</h1>
      <button
        onClick={fetchAllPokemons} // เรียกฟังก์ชันเมื่อกดปุ่ม
        style={{
          padding: '10px 20px',
          margin: '20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Get pokemon dex
      </button>

      {/* แสดงข้อมูลโปเกมอนทั้งหมด 151 ตัวหลังจากกดปุ่ม */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemonDetails.length > 0 &&
          pokemonDetails.map((pokemon, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                backgroundColor: '#c4e6c7',
                borderRadius: '5px',
                width: '300px',
                margin: '10px',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ margin: '0 10px' }} />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} style={{ margin: '0 10px' }} />
              </div>
              <h2 style={{ textTransform: 'uppercase', textAlign: 'center' }}>{pokemon.name}</h2>
              <h3>Type 1: {pokemon.types[0].type.name}</h3>
              {pokemon.types[1] && <h3>Type 2: {pokemon.types[1].type.name}</h3>}
              <h4>Base stats:</h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {pokemon.stats.map((stat, statIndex) => (
                  <li key={statIndex}>
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
