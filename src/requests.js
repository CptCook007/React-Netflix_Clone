const key = "e362f62148a6d28e6eccbc434bae5241";
const requests = [
  {
    id: 1,
    title: "Originals",
    requestURI: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=12`,
  },
  {
    id: 8,
    title: "Upcoming",
    requestURI: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  },
  {
    id: 2,
    title: "Popular",
    requestURI: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  {
    id: 3,
    title: "Top Rated",
    requestURI: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  },
  {
    id: 6,
    title: "Trending",
    requestURI: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  },
  {
    id: 4,
    title: "Fantasy",
    requestURI: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
  },
  {
    id: 5,
    title: "Science Fiction",
    requestURI: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
  },
  {
    id: 7,
    title: "Family",
    requestURI: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10751`,
  },
  {
    id: 9,
    title: "Mystery",
    requestURI: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  },
];
export default requests;
