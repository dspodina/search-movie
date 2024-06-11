import Header from "./Components/Header";
import "./App.css";
import MovieContainer from "./Components/MovieContainer";
import SearchContext from "./context/SearchContext";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("friends");
  return (
    <SearchContext.Provider
      value={{ searchText: searchText, setSearchText: setSearchText }}
    >
      <div>
        <Header title="Moviefy" />
        <MovieContainer searchText={searchText} />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
