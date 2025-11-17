import { useEffect, useState } from 'react';
import { searchMovies } from '../services/api';
import MovieList from './MovieList';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await searchMovies('popular', 'movie', 1);
                if (response.data.Response === 'True') {
                    setMovies(response.data.Search);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchPopularMovies();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">All Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default AllMovies;