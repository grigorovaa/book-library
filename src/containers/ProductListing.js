import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  const addBookToMyBooks = (book) => {
    setMyBooks((myBooksList) => [...myBooksList, book]);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  useEffect(() => {
    searchBooks(searchTerm);
  }, [searchTerm]);

  function searchBooks(query) {
    const apiUrl = `http://openlibrary.org/search.json?q=${query}&limit=10`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const books = data.docs;
        setSearchResults(books);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <BookList
        searchResults={searchResults}
        addBookToMyBooks={addBookToMyBooks}
        myBooks={myBooks}
      />
    </>
  );
};

export default ProductListing;
