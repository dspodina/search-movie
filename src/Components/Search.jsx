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
    console.log(value);
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
          backgroundColor: "#042441",
          flexGrow: 1,
          "& .MuiOutlinedInput-root": {
            height: "46px",
            borderRadius: "5px",
            color: "#fff",
            fontSize: "18px",
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
          height: "46px",
          fontWeight: "700",
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
