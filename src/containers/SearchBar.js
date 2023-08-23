import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(event.target.value);
  };

  return (
    <form className="input-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter book title or author"
        className="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e);
        }}
      />
      <button type="submit" style={{ display: "none" }}></button>
      <img
        src="./icons/search.svg"
        alt="search"
        width="16px"
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      />
    </form>
  );
};

export default SearchBar;
