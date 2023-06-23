import "./App.css";

import AddBookButton from "./components/AddBookButton";
import NavBar from "./components/NavBar";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" exact element={<ProductListing />} /> */}
            {/* <Route
              path="/product/:productId"
              exact
              element={<ProductDetail />}
            /> */}
            <Route>404 Not Found!</Route>
          </Routes>
        </Router>
        <section className="general-navig">
          <NavBar />
        </section>
        {/* <ProductListing /> */}
        <Header />
        {/* <section className="books" id="books">
          <div className="single-book">
            <Book>name</Book>
            <AddBookButton />
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
