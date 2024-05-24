import React, { useState } from "react";
import SearchResults from "./SearchResults";
import './styles/search.css';

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search term submitted:", searchTerm);
    // Handle your search logic here
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    // Clear the search term
    setSearchTerm("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="SearchTerm"
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <SearchResults searchTerm={searchTerm} clearSearch={clearSearch} />
    </>
  );
}

export default Search;
