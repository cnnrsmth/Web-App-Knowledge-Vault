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
        // Select or deselect "All"
        return prevFilter.includes("All") ? [] : ["All"];
      } else {
        if (prevFilter.includes("All")) {
          // If "All" is selected and a sub-category is clicked, switch to that category only
          return [category];
        }

        const updatedFilter = prevFilter.includes(category)
          ? prevFilter.filter((c) => c !== category)
          : [...prevFilter, category];

        // Check if all categories are selected; if so, switch to "All"
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
