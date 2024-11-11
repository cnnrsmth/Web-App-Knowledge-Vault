import React, { useState } from "react";
import BookCard from "./BookCard";
import Filter from "./Filter";

const Books = ({ bookNotes }) => {
  const [filter, setFilter] = useState(["All"]);

  // Dynamically generate categories based on the fetched book notes
  const categories = [
    "All",
    ...new Set(bookNotes.map((item) => item.category)), // Get unique categories from the data
  ];

  // Toggle filter logic
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

  // Filter the books based on selected categories
  const filteredBooks = filter.includes("All")
    ? bookNotes
    : bookNotes.filter((book) => filter.includes(book.category));

  return (
    <div
      className="pt-40 px-40 py-60 min-h-screen"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <Filter
        toggleFilter={toggleFilter}
        filter={filter}
        categories={categories}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 mt-20">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
