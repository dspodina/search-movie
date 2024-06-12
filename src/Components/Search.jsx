import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchContext from "../context/SearchContext";

const Search = () => {
  const [value, setValue] = useState("");

  const { setSearchText } = useContext(SearchContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    }
    setSearchText(value);
    setValue("");
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Movies"
        variant="outlined"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          borderRadius: "5px",
          backgroundColor: "var(--blue-color)",
          flexGrow: 1,
          "& .MuiOutlinedInput-root": {
            height: "46px",
            borderRadius: "5px",
            color: "var(--beige-color)",
            fontSize: "14px",
            "& fieldset": {
              borderColor: "var(--light-blue-color)",
              fontSize: "14px",
            },
            "&:hover fieldset": {
              borderColor: "var(--light-blue-color)",
              outline: "none",
              fontSize: "14px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--light-blue-color)",
              outline: "none",
            },
          },
          "& .MuiInputLabel-root": {
            color: "var(--beige-color)",
            fontSize: "10px",
            textTransform: "uppercase",
            fontWeight: "400",
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          color: "var(--beige-color)",
          background: "var(--gradient)",
          height: "46px",
          fontWeight: "400",
          "&:hover": {
            background:
              "rgb(11,107,158) linear-gradient(299deg, rgba(11,107,158,1) 0%, rgba(11,237,210,1) 100%)",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
