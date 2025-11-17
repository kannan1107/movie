
import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import { searchMovies } from '../services/api';

const SearchPage = () => {
  const [query, setQuery] = useState('popular');
  const [type, setType] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (searchQuery = query, page = 1) => {
    try {
      setLoading(true);
      setError('');
      const response = await searchMovies(searchQuery, type, page);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
        setCurrentPage(page);
      } else {
        setMovies([]);
        setError(response.data.Error || 'No movies found');
      }
    } catch (err) {
      setMovies([]);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('popular', 1);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      fetchMovies(query, 1);
    }
  };

  const handlePageChange = (page) => {
    fetchMovies(query, page);
  };

  return (
    <div className="p-6">
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} type={type} setType={setType} />
      
      {loading && <div className="text-center py-8"><div className="text-lg">Loading movies...</div></div>}
      
      {error && !loading && (
        <div className="text-center py-8">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}
      
      {!loading && !error && movies.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No movies found. Try a different search term.</p>
        </div>
      )}
      
      {!loading && movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          {totalResults > 10 && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / 10)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
