import React, { useState, useEffect } from "react";

import BookCard from "../components/BookCard";
import booksData from "../data/books";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 pt-40">
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </div>
  );
};

export default Books;
