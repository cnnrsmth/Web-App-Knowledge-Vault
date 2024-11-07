import React, { useState } from "react";
import BookCard from "../components/BookCard";
import Filter from "./Filter";
import booksData from "../data/books";

const Books = () => {
  const [filter, setFilter] = useState(["All"]);
  const categories = [
    "All",
    ...new Set(booksData.map((item) => item.category)),
  ];

  const toggleFilter = (category) => {
    setFilter((prevFilter) => {
      if (category === "All") {
        return prevFilter.includes("All") ? [] : ["All"];
      } else {
        if (prevFilter.includes("All")) {
          return [category];
        }

        const updatedFilter = prevFilter.includes(category)
          ? prevFilter.filter((c) => c !== category)
          : [...prevFilter, category];

        return updatedFilter.length === categories.length - 1
          ? ["All"]
          : updatedFilter;
      }
    });
  };

  const filteredBooks = filter.includes("All")
    ? booksData
    : booksData.filter((book) => filter.includes(book.category));

  return (
    <div
      className="pt-40 px-40 py-60 min-h-screen"
      style={{ backgroundColor: "#0A0A0A" }}
    >
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
