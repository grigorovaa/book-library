import React from "react";
import AddBookButton from "../components/AddBookButton";

const BookList = ({ searchResults }) => {
  if (!searchResults) {
    return null; // Return null or a placeholder while the search is in progress
  }

  return (
    <div className="books">
      {searchResults.length > 0 ? (
        searchResults.map((book, index) => (
          <div key={index} className="single-book">
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author:</strong>{" "}
            {book.author_name ? book.author_name[0] : "Unknown"}
            <br />
            <strong>First Publish Year:</strong>{" "}
            {book.first_publish_year ? book.first_publish_year : "Unknown"}
            <br />
            <img
              src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt="Book Cover"
              onError={(e) => {
                // e.target.src = "../icons/cover_not_found.jpg";
                console.log("no image");
              }}
            />
            <AddBookButton />
          </div>
        ))
      ) : (
        // <p>No books found</p>
        <p></p>
      )}
    </div>
  );
};

export default BookList;
