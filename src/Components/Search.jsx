import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchContext from "../context/SearchContext";
import Container from "@mui/material/Container";

const Search = () => {
  const [inputValue, setInputValue] = useState("man");

  const { setSearchText } = useContext(SearchContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return console.log(inputValue);
    }
    setSearchText(inputValue);
    setInputValue("");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          marginBottom: "50px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Movies"
          variant="outlined"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#042441",
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              height: "56px",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "16px",
              "& fieldset": {
                borderColor: "#09aea9",
              },
              "&:hover fieldset": {
                borderColor: "#09aea9",
                outline: "none",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#09aea9",
                outline: "none",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#f6f4f2",
              fontSize: "16px",
              textTransform: "uppercase",
              fontWeight: "400",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(11,107,158,1) 0%, rgba(11,237,210,1) 100%)",
            height: "56px",
          }}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Search;
