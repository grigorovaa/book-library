import React from "react";

export default function AddBookButton({ book, addBookToMyBooks, isAdded }) {
  const handleClick = () => {
    addBookToMyBooks(book);
  };
  return (
    <button className="add-book" onClick={handleClick} disabled={isAdded}>
      {isAdded ? "The book is added" : "Add book"}
    </button>
  );
}
