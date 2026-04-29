export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}