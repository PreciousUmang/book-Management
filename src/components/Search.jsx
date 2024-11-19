function Search({ setSearch, handleSearch }) {
    return (
      <div className="my-4">
        <h2 className="font-semibold text-lg my-4">Search Books</h2>
        <input
          type="text"
          className="border rounded-s-lg p-3"
          placeholder="Enter book title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="border rounded-e-lg p-3 bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    );
  }
  
  export default Search;
  