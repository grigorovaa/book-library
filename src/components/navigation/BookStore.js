import React from "react";
import ProductListing from "../../containers/ProductListing";
import BookList from "../../containers/BookList";
import Header from "../../containers/Header";

function BookStore() {
  return (
    <>
      <section className="bookstore">
        <Header name="Book Store" />
        <ProductListing />
        <BookList />
      </section>
    </>
  );
}

export default BookStore;
