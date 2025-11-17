import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const placeholderImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await getMovieDetails(id);
        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError(response.data.Error || 'Movie not found');
        }
      } catch (err) {
        setError('Failed to load movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <div className="p-6 text-center"><div className="text-lg">Loading...</div></div>;
  if (error) return (
    <div className="p-6 text-center">
      <p className="text-red-500 text-lg mb-4">{error}</p>
      <Link to="/" className="text-blue-500 underline">← Back to Search</Link>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back to Search</Link>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0">
          <img 
            src={imgError || movie.Poster === 'N/A' ? placeholderImg : movie.Poster} 
            alt={movie.Title} 
            className="w-80 h-auto rounded-lg shadow-lg"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{movie.Title}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">{movie.Year}</span>
            {movie.Rated && <span className="bg-green-100 text-green-800 px-3 py-1 rounded">{movie.Rated}</span>}
            {movie.Runtime && <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">{movie.Runtime}</span>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {movie.Genre && (
              <div>
                <h3 className="font-semibold text-gray-700">Genre</h3>
                <p className="text-gray-600">{movie.Genre}</p>
              </div>
            )}
            {movie.Director && (
              <div>
                <h3 className="font-semibold text-gray-700">Director</h3>
                <p className="text-gray-600">{movie.Director}</p>
              </div>
            )}
          </div>

          {movie.Plot && (
            <div>
              <h3 className="font-semibold text-gray-700">Plot</h3>
              <p className="text-gray-600 leading-relaxed">{movie.Plot}</p>
            </div>
          )}

          {movie.Actors && (
            <div>
              <h3 className="font-semibold text-gray-700">Cast</h3>
              <p className="text-gray-600">{movie.Actors}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            {movie.imdbRating && movie.imdbRating !== 'N/A' && (
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded">
                <span className="font-semibold">IMDB:</span> {movie.imdbRating}/10
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
