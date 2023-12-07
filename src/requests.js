const key = "e362f62148a6d28e6eccbc434bae5241";
const requests = {
  requestOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=12`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
  requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestUMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
};
export default requests;
