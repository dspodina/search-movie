import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

const Movie = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <Card
      sx={{
        maxWidth: 380,
        height: 680,
        backgroundColor: "#f8f8f8",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{
            height: 400,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          image={`${baseUrl}${movie.poster_path}`}
        />
        <Badge
          badgeContent={movie.vote_average}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "16px",
              height: "28px",
              minWidth: "28px",
              borderRadius: "7px",
              background: "#10b6e0",
              color: "#fff",
              padding: "20px",
              margin: "10px",
              top: "10px",
              right: "10px",
            },
            position: "absolute",
            top: 16,
            right: 16,
          }}
        />
      </Box>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: '"Josefin Sans", sans-serif',
              textTransform: "uppercase",
            }}
          >
            {movie.title}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            marginBottom: "10px",
            color: "#555",
            fontFamily: '"Merriweather Sans", sans-serif',
            fontWeight: "200",
          }}
        >
          {truncate(movie.overview, 150)}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "14px", marginBottom: "5px" }}
        >
          Release date: {movie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
