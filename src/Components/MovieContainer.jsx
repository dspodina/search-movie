import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getMovie from "../Apis/getMovie";
import Movie from "./Movie";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const MovieContainer = ({ searchText }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovie();
        const filteredMovies = data.results.filter(movie =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setMovies(filteredMovies);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, [searchText]);
  

  return (
    <Container maxWidth="lg">
      {error && <p>{error}</p>}
      <Grid container spacing={2}>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Movie key={movie.id} movie={movie} />
            </Grid>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </Grid>
    </Container>
  );
};

MovieContainer.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default MovieContainer;
