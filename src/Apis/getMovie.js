import axios from "axios";

const getMovie = async (value) => {
  const search = value || 'star'
  try {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&page=1`)
    if (res.status !== 200) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getMovie;
