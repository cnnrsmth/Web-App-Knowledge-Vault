import React, { useState, useEffect } from "react";

import BookCard from "../components/BookCard";
import Filter from "./Filter";
import booksData from "../data/books";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState(["All"]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const toggleFilter = (category) => {
    setFilter((prevFilter) => {
      if (prevFilter.includes(category)) {
        return prevFilter.filter((c) => c !== category);
      } else {
        return [...prevFilter, category];
      }
    });
  };

  const filteredBooks = filter.includes("All")
    ? books
    : books.filter((book) => filter.includes(book.category));

  return (
    <div className="pt-40">
      <Filter toggleFilter={toggleFilter} filter={filter} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 mt-20">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
