export default function Filter({ types, selectedType, setSelectedType }) {
  return (
    <select
      className="filter"
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
    >
      <option value="">All Types</option>
      {types.map((t) => (
        <option key={t.name} value={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
}