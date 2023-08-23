import React from "react";
import AddBookButton from "../components/AddBookButton";

const BookList = ({ searchResults, addBookToMyBooks, myBooks }) => {
  if (!searchResults) {
    return null;
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
                //TODO: supposed to print default image
                console.log("no image");
              }}
            />
            <AddBookButton
              book={book}
              addBookToMyBooks={addBookToMyBooks}
              isAdded={myBooks.includes(book)}
            />
          </div>
        ))
      ) : (
        //TODO: <p>No books found</p>
        <p></p>
      )}
    </div>
  );
};

export default BookList;
