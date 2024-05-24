import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from '../files/Products.json';
import './styles/search.css';

function SearchResults({ searchTerm, clearSearch }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // If searchTerm is empty, set results to an empty array
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    // Filter productsData based on the searchTerm and update results state
    const filteredResults = productsData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setResults(filteredResults);
  }, [searchTerm]);

  const handleLinkClick = () => {
    // Call the clearSearch function passed from the parent component
    clearSearch();
  };

  return (
    <div className="search-dropdown">
      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Link
                to={`/items?category=${encodeURIComponent(result.category)}`}
                style={{ textDecoration: "none", color: "white" }}
                onClick={handleLinkClick} // Call handleLinkClick on link click
              >
                {result.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
