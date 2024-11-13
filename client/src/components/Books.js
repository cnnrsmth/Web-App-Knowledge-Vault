import React, { useState } from "react";
import BookCard from "./BookCard";
import Filter from "./Filter";
import Search from "./Search"; // Import Search component
import { FiFilter, FiSearch } from "react-icons/fi"; // Import both icons

const Books = ({ bookNotes }) => {
  const [filter, setFilter] = useState(["All"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false); // New state to track filter visibility

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

  // Toggle visibility of the filter section
  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Filter the books based on selected categories
  const filteredBooks = filter.includes("All")
    ? bookNotes
    : bookNotes.filter((book) => filter.includes(book.category));

  return (
    <div
      className="pt-40 lg:px-40 py-60 min-h-screen"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Search with Filter Icon */}
      <div className="flex justify-center items-center mb-6">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Filter button with icon */}
        <button
          onClick={handleFilterToggle}
          className="ml-4 w-12 h-12 rounded-full bg-black text-white border-2 border-white flex justify-center items-center transition duration-300 hover:bg-white hover:border-black hover:text-black focus:outline-none"
        >
          <FiFilter className="w-6 h-6" style={{ strokeWidth: 2 }} />
        </button>
      </div>

      {/* Conditionally render the filter based on visibility */}
      {isFilterVisible && (
        <Filter
          toggleFilter={toggleFilter}
          filter={filter}
          categories={categories}
        />
      )}

      {/* Render filtered books */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 mt-20">
        {filteredBooks
          .filter(
            (book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
      </div>
    </div>
  );
};

export default Books;
