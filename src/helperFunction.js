import axios from "axios";

const fetchMovie = async (page = 1, searchTerm) =>
    searchTerm
        ? await axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=0eb72e5a87c3896938cd899d9b93a334&query=${searchTerm}&page=${page}`
          )
        : await axios.get(
              `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0eb72e5a87c3896938cd899d9b93a334&page=${page}`
          );
const fetchImg = (path) => `https://image.tmdb.org/t/p/w500${path}`;

export { fetchMovie, fetchImg };
