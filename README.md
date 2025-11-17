# Movie Search Application

A modern React-based movie search application that allows users to search for movies, TV series, and episodes using the OMDB API. The application features a clean, responsive design with detailed movie information and pagination support.

## Features

- **Movie Search**: Search for movies, TV series, and episodes by title or keywords
- **Type Filtering**: Filter results by content type (Movies, TV Series, Episodes) using API endpoints
- **Detailed View**: View comprehensive movie details including plot, cast, ratings, and more
- **Pagination**: Navigate through large sets of search results
- **Responsive Design**: Optimized for desktop and mobile devices
- **Error Handling**: User-friendly error messages for API failures and no results
- **Image Fallbacks**: Graceful handling of broken or missing movie posters

## Tech Stack

- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling and responsive design
- **Axios** - HTTP client for API requests
- **Vite** - Build tool and development server
- **OMDB API** - Movie database API

## Project Structure

```
src/
├── components/
│   ├── AllMovies.jsx      # Display all movies component
│   ├── MovieCard.jsx      # Individual movie card component
│   ├── MovieList.jsx      # Grid layout for movie cards
│   ├── Pagination.jsx     # Pagination controls
│   └── SearchBar.jsx      # Search input and filters
├── pages/
│   ├── MovieDetails.jsx   # Detailed movie view
│   └── SearchPage.jsx     # Main search page
├── services/
│   └── api.js            # API service functions
├── App.jsx               # Main app component with routing
└── main.jsx             # Application entry point
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-movies
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## API Configuration

The application uses the OMDB API. The API key is configured in `src/services/api.js`. For production use, consider moving the API key to environment variables.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### SearchPage
- Main landing page with search functionality
- Displays popular movies by default
- Handles search queries and pagination
- Includes error handling and loading states

### MovieDetails
- Detailed view for individual movies
- Displays comprehensive movie information
- Includes navigation back to search results
- Handles missing or invalid movie data

### SearchBar
- Search input with Enter key support
- Type filter dropdown (Movies, TV Series, Episodes)
- Clean, modern design with focus states

### MovieCard
- Displays movie poster, title, year, and type
- Handles broken image URLs with fallback
- Responsive design with hover effects
- Direct link to movie details

## Features Implementation

### Search Functionality
- Real-time search using OMDB API
- Support for partial matches and keywords
- Type-based filtering without using array.filter()

### Pagination
- Server-side pagination using API parameters
- Navigation controls with disabled states
- Page information display

### Error Handling
- Network error handling
- API error responses
- No results found scenarios
- Broken image URL handling

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly interface elements

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
