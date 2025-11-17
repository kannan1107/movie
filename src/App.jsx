import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import AllMovies from './components/AllMovies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<SearchPage />} />
        <Route path="/all" element={<AllMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
