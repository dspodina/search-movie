import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getMovie from "../Apis/getMovie";
import Movie from "./Movie";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const MovieContainer = ({ searchText }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovie(searchText);
        setMovies(data.Search || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, [searchText]);

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "60px" }}>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Grid container spacing={2}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Grid key={movie.imdbID} item xs={12} sm={6} md={4} lg={3}>
              <Movie movie={movie} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: "var(--beige-color)" }}>
              No movies found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

MovieContainer.propTypes = {
  searchText: PropTypes.string.isRequired,
};

export default MovieContainer;
