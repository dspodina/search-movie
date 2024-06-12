import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Footer = ({ footerText }) => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "var(--light-blue-color)",
        py: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            fontWeight: "200",
            fontFamily: "Merriweather Sans",
            color: "var(--beige-color)",
            m: 0,
          }}
        >
          {footerText}
        </Typography>
        <ButtonGroup
          variant="text"
          aria-label="social media buttons"
          sx={{
            gap: 2,
          }}
        >
          <Button
            sx={{
              color: "var(--blue-color)",
              fontSize: "20px",
            }}
            href="https://github.com/dspodina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Button>
          <Button
            sx={{
              color: "var(--blue-color)",
              fontSize: "20px",
            }}
            href="https://www.linkedin.com/in/daria-spodina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};

export default Footer;
