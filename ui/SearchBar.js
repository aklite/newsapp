import React, { useEffect, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"
import useSWR from 'swr';
import axios from 'axios';
async function fetchData(query) {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=8cd337d555b044639574874af216df52`;
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  }
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data } = useSWR(debouncedQuery, fetchData);
  useEffect(() => {
    if (data && data.articles) {
      setSearchResults(data.articles);
    }
  }, [data]);
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
        <div>
        <AiOutlineSearch
         fontSize={40}
        />
        </div>
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
