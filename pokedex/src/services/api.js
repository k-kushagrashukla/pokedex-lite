import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (offset = 0, limit = 20) => {
  const res = await axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  return res.data;
};

export const fetchPokemonDetails = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const fetchTypes = async () => {
  const res = await axios.get(`${BASE_URL}/type`);
  return res.data.results;
};