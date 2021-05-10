const API_KEY = "d7129cef30ee78a525ff5859458f6546";

const requests = {
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    bingeBoxOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;