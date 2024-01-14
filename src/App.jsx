import "./App.css";
import { useState, useEffect } from "react";
import { usePokeListPagination, LIMIT } from "./hooks/usePokeListPagination";

function App() {
  const { data, page, prevStep, nextStep} = usePokeListPagination();
  const [ pokeList, setPokemonList] = useState([]);
  useEffect(() => {
    setPokemonList(data.slice(LIMIT * page - LIMIT, LIMIT * page));
  }, [page, data]);

  return (
    <div className="App h-full w-full">
      <header className="bg-blue-300 w-full h-16 text-white text-lg flex justify-center items-center">
        <span className="text-2xl">Pokemon</span>
      </header>
      <div className="flex flex-wrap justify-center bg-gray-300 pt-8">
        <div className="mb-8 w-full">
          <Pagination page={page} prevStep={prevStep} nextStep={nextStep} />
        </div>
        {pokeList.map((pokemon) => (
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
import Pagination from "./components/Pagination";

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
