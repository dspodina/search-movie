import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

const Movie = ({ movie }) => {
  return (
    <Card
      sx={{
        maxWidth: 380,
        height: 580,
        backgroundColor: "#f8f8f8",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{
            height: 450,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          image={`${movie.Poster}`}
        />
        <Badge
          badgeContent={movie.Type}
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
            {movie.Title}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "13px", marginBottom: "5px" }}
        >
          Release date: {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
