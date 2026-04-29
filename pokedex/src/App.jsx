import { useEffect, useState } from "react";
import {
  fetchPokemonList,
  fetchPokemonDetails,
  fetchTypes,
} from "./services/api";
import PokemonCard from "./components/PokemonCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import useFavorites from "./hooks/useFavorites";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    loadPokemon();
  }, [offset]);

  useEffect(() => {
    loadTypes();
  }, []);

  const loadPokemon = async () => {
    try {
      setLoading(true);

      const data = await fetchPokemonList(offset);

      const detailed = await Promise.all(
        data.results.map((p) => fetchPokemonDetails(p.url))
      );

      setPokemon(detailed);
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadTypes = async () => {
    const data = await fetchTypes();
    setTypes(data);
  };

  const filtered = pokemon.filter((p) => {
    return (
      p.name.includes(search.toLowerCase()) &&
      (selectedType === "" ||
        p.types.some((t) => t.type.name === selectedType))
    );
  });

  return (
    <div className="container">
      <h1>pokedex Lite</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <Filter
        types={types}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <PokemonCard
              key={p.id}
              pokemon={p}
              onClick={setSelectedPokemon}
              isFav={favorites.some((f) => f.id === p.id)}
              toggleFav={toggleFavorite}
            />
          ))}
        </div>
      )}

      <Pagination offset={offset} setOffset={setOffset} />

      <Modal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  );
}

export default App;