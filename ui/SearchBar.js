import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${debouncedQuery}&apiKey=8cd337d555b044639574874af216df52`
      );
      const data = await response.json();
      setSearchResults(data.articles);
    };

    if (debouncedQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);
  return (
    <div
      style={{
        marginLeft: "auto",
        color: "white",
        paddingRight: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div>Icon</div>
        <div>
          <input
            className="input"
            style={{
              backgroundColor: "gray",
              outline: "none",
              border: "none",
              paddingBlock: "10px",
            }}
            onChange={handleQueryChange}
            type="text"
          />
          <div
            style={{
              position: "absolute",
              zIndex:"10",
              left:"0",
              margin:"auto",
              right:"0",
              top:"100px",
              width:"70%",
              height:"400px",
             overflowY:"scroll"
              
            }}
            className="results"
          >
            {searchResults.map((article) => (
              <div key={article.url} 
                style={{
                  backgroundColor:"#EAEAEA",
                  color:"black",
                  paddingBlock:"10px",
                  border:"1px solid black",
                }}
              >
                <h1>{article.title}</h1>
                <p 
                style={{
                    fontSize:"0.875rem"
                }}
                >{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
