export default function PokemonCard({ pokemon, onClick, isFav, toggleFav }) {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>

      <div className="card-buttons">
        <button onClick={() => toggleFav(pokemon)}>
          {isFav ? "❤️" : "🤍"}
        </button>

        <button onClick={() => onClick(pokemon)}>
          Details
        </button>
      </div>
    </div>
  );
}