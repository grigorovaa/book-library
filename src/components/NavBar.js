// import React, { useState } from "react";

import ProductListing from "../containers/ProductListing";

export default function NavBar() {
  return (
    <nav>
      <ul className="navigation">
        <li className="search" id="search-form">
          {/* <label className="search">
            <img src="./icons/search.svg" alt="search" width="16px" />
            <input type="text" placeholder="search" id="search-input"></input>
          </label> */}
        </li>
        <li className="navigation-category">Books</li>
        <li className="navigation-item">
          <img src="./icons/bookmark.svg" alt="bookmark" width="16px" />
          Reading now
        </li>
        <li className="navigation-item">
          <img src="./icons/book-alt.svg" alt="book" width="16px" />
          Book Store
        </li>
      </ul>
      <ul className="navigation">
        <li className="navigation-category">Library</li>
        <li className="navigation-item">
          <img src="./icons/books.svg" alt="books" width="16px" />
          All
        </li>
        <li className="navigation-item">
          <img src="./icons/arrow-right.svg" alt="arrow" width="16px" />
          Want to Read
        </li>
        <li className="navigation-item">
          <img src="./icons/check.svg" alt="check" width="16px" />
          Finished
        </li>
      </ul>
      <ProductListing />
      {/* <BookList /> */}
    </nav>
  );
}
