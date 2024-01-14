export const LIMIT = 20;
import { useState, useEffect } from "react";

export const usePokeListPagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [memoPage, setMemoPage] = useState([]);

  const nextStep = () => {
    setPage(page + 1);
    setOffset(offset + LIMIT);
  };

  const prevStep = () => {
    setPage(page - 1);
    setOffset(offset - LIMIT);
  };

  const fetchData = async () => {
    if (memoPage.includes(page)) return;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
    );
    const responseData = await response.json();

    const promises = responseData.results.map((pokemon) =>
      fetch(pokemon.url).then((response) => response.json())
    );

    const pokemons = await Promise.allSettled(promises);
    const pokeData = pokemons.map((pokemonPromise) => pokemonPromise.value);
    setData(data.concat(pokeData));
    setMemoPage(memoPage.concat(page));
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  return { data, page, nextStep, prevStep };
};
