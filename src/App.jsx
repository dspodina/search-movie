import Header from "./Components/Header";
import "./App.css";
import MovieContainer from "./Components/MovieContainer";
import SearchContext from "./context/SearchContext";
import { useState } from "react";
import Footer from "./Components/Footer";
import Divider from '@mui/material/Divider';

function App() {
  const [searchText, setSearchText] = useState("star");
  
  return (
    <SearchContext.Provider
      value={{ searchText: searchText, setSearchText: setSearchText }}
    >
      <div id="root">
        <Header title="Moviefy" />
        <Divider 
          sx={{ 
            width: "80%",
            fontSize: "20px", 
            textTransform: "uppercase",
            color: "var(--beige-color)", 
            marginBottom: "40px", 
            display: "flex",
            alignItems: "center",
            margin: "20px auto",
            "&::before, &::after": {
              content: '""',
              flex: 1,
              borderBottom: "0.5px solid var(--light-blue-color)",
            },
            "&::before": {
              marginRight: "0.25em",
            },
            "&::after": {
              marginLeft: "0.25em",
            },
          }}
        >
          { searchText }
        </Divider>
        <MovieContainer searchText={searchText} />
        <Footer footerText="Junior Full Stack Developer  © Spodina Daria" />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
