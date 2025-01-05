export const getPopularMovies = async () => {
  const response = await fetch("https://movie-app-backend-62gi.onrender.com/api/popular-movies");
  return await response.json();
};

export const searchMovies = async (query) => {
  const response = await fetch(`https://movie-app-backend-62gi.onrender.com/api/search-movies?query=${encodeURIComponent(query)}`);
  return await response.json();
};
