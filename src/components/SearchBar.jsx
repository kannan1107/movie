const SearchBar = ({ query, setQuery, onSearch, type, setType }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Movie Search</h1>
        <p className="text-gray-600">Discover your favorite movies and TV shows</p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <input
          type="text"
          placeholder="Search movies, series, episodes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Types</option>
          <option value="movie">Movies</option>
          <option value="series">TV Series</option>
          <option value="episode">Episodes</option>
        </select>
        <button 
          onClick={onSearch} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
