import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

      <BookList searchResults={searchResults} />
    </>
  );
};

export default ProductListing;

// import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";
// import AddBookButton from "../components/AddBookButton";

// const ProductListing = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     searchBooks(searchTerm);
//   };

//   useEffect(() => {
//     searchBooks(searchTerm);
//   }, [searchTerm]);

//   function searchBooks(query) {
//     const apiUrl = `http://openlibrary.org/search.json?q=${query}&limit=10`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         const books = data.docs;
//         setSearchResults(books);
//       })
//       .catch((error) => {
//         console.log("An error occurred:", error);
//       });
//   }
//   return (
//     <>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter book title or author"
//           className="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button type="submit" style={{ display: "none" }}></button>
//         <img
//           src="./icons/search.svg"
//           alt="search"
//           width="16px"
//           onClick={handleSearch}
//           style={{ cursor: "pointer" }}
//         />
//       </form>

//       <div className="books">
//         {searchResults.length > 0
//           ? searchResults.map((book, index) => (
//               <div key={index} className="single-book">
//                 <strong>Title:</strong> {book.title}
//                 <br />
//                 <strong>Author:</strong>{" "}
//                 {book.author_name ? book.author_name[0] : "Unknown"}
//                 <br />
//                 <strong>First Publish Year:</strong>{" "}
//                 {book.first_publish_year ? book.first_publish_year : "Unknown"}
//                 <br />
//                 <img
//                   src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
//                   alt="Book Cover"
//                   onError={(e) => {
//                     // e.target.src = "../icons/cover_not_found.jpg";
//                     console.log("no image");
//                   }}
//                 />
//                 <AddBookButton />
//               </div>
//             ))
//           : null}
//         {searchTerm !== "" && searchResults.length === 0 && (
//           <p>No books found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductListing;
