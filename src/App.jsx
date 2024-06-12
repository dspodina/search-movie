import Header from "./Components/Header";
import "./App.css";
import MovieContainer from "./Components/MovieContainer";
import SearchContext from "./context/SearchContext";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [searchText, setSearchText] = useState("star");
  return (
    <SearchContext.Provider
      value={{ searchText: searchText, setSearchText: setSearchText }}
    >
      <div id="root">
        <Header title="Moviefy" />
        <MovieContainer searchText={searchText} />
        <Footer footerText="Junior Full Stack Developer ©2024" />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
