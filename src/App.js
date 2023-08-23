import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BookStore from "./components/navigation/BookStore";
import MyBooks from "./components/navigation/MyBooks";
import FinishedBooks from "./components/navigation/FinishedBooks";
import ReadingNow from "./components/navigation/ReadingNow";
import WantToRead from "./components/navigation/WantToRead";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <section className="general-navig">
            <NavBar />
          </section>
          <Routes>
            <Route>404 Not Found!</Route>
            <Route path="/bookstore" element={<BookStore />} />
            <Route path="/mybooks" element={<MyBooks />} />
            <Route path="/finished" element={<FinishedBooks />} />
            <Route path="/readingnow" element={<ReadingNow />} />
            <Route path="/wanttoread" element={<WantToRead />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
