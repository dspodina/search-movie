import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Search from "./Search";

const Header = ({ title }) => {
  return (
    <Container>
      <Box
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
          margin: "40px 0 50px",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontSize: "42px",
            fontWeight: "900",
            textTransform: "uppercase",
            fontFamily: '"Josefin Sans", sans-serif',
            backgroundImage: "var(--gradient)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          {title}
        </Typography>
        <Search />
      </Box>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
