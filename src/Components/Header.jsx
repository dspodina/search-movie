import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = ({ title }) => {
  return (
    <Container>
      <Box maxWidth="lg">
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            margin: "20px 0 30px",
            textTransform: "uppercase",
            fontFamily: '"Josefin Sans", sans-serif',
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
