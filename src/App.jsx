import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const pokemons = [];
      const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        pokemons.push(data);
      });

      await Promise.allSettled(promises);
      setPokemon(pokemons);
    };

    fetchData();
  }, []);

  return (
    <div className="App h-full w-full">
      <header className="bg-blue-300 w-full h-16 text-white text-lg flex justify-center items-center">
        <span className="text-2xl">Pokemon</span>
      </header>
      <div className="flex flex-wrap justify-center bg-gray-300 pt-8">
        {pokemon.map((pokemon) => (
          <div key={pokemon.id} className="mb-16 mr-16">
            <Card
              key={pokemon.id}
              name={pokemon.name}
              descriptions={pokemon.types}
              imageUrl={pokemon.sprites.front_default}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import { getPokemonTypeColor } from "./utils/pokeTypes";

function Card({ name, descriptions, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full h-40 rounded" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 uppercase">{name}</div>
        <div>
          {descriptions.map((description) => (
            <span
              key={description.type.name}
              className={`${getPokemonTypeColor(description.type.name)} inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2`}
            >
              {description.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired })
  ),
  imageUrl: PropTypes.string.isRequired,
};

export default App;
