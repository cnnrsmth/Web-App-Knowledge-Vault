import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import bookData from "./data/books.json";

function App() {
  return (
    <Router>
      <div className="App lg:px-8">
        <Navbar />
        <Routes>
          <Route path="/book-notes" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails books={bookData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
