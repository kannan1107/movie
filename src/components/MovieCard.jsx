import { Link } from 'react-router-dom';
import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [imgError, setImgError] = useState(false);
  
  const isValidImageUrl = (url) => {
    if (!url || url === 'N/A') return false;
    return !url.includes('@.');
  };
  
  const placeholderImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
  
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
                    src={(movie.Poster) ?   movie.Poster : placeholderImg} 

          alt={movie.Title} 
          className="w-full h-80 object-cover" 
          onError={() => setImgError(true)}
        />
        {movie.Type && (
          <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs capitalize">
            {movie.Type}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{movie.Title}</h3>
        <p className="text-gray-600 mb-3">{movie.Year}</p>
        <Link 
          to={`/movie/${movie.imdbID}`} 
          className="inline-block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
