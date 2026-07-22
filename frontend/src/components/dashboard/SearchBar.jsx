function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by Ticket ID, Customer or Subject..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg p-3"
    />
  );
}

export default SearchBar;