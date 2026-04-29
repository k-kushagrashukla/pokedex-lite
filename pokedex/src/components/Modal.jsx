export default function Modal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <p><b>Height:</b> {pokemon.height}</p>
        <p><b>Weight:</b> {pokemon.weight}</p>
        <p>
          <b>Types:</b>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}