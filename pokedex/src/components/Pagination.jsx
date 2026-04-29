export default function Pagination({ offset, setOffset }) {
  return (
    <div className="pagination">
      <button onClick={() => setOffset(offset - 20)} disabled={offset === 0}>
        Prev
      </button>

      <button onClick={() => setOffset(offset + 20)}>
        Next
      </button>
    </div>
  );
}