import axios from "axios";

const getMovie = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_SEARCH_MOVIE_KEY
      }`
    );
    if (res.status !== 200) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getMovie;
