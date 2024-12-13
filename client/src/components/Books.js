import React, { useState } from "react";
import BookCard from "./BookCard";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort"; // Import Sort component
import { FiFilter } from "react-icons/fi";

const Books = ({ bookNotes }) => {
  console.log(bookNotes[0]); // Add this at the start of your Books component

  const [filter, setFilter] = useState(["All"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("neutral");

  const categories = [
    "All",
    ...new Set(bookNotes.map((item) => item.category)),
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

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedBooks = [...bookNotes].sort((a, b) => {
    if (sortOrder === "ascending") return b.rating - a.rating;
    if (sortOrder === "descending") return a.rating - b.rating;
    return 0; // Neutral: no sorting
  });

  const filteredBooks = filter.includes("All")
    ? sortedBooks
    : sortedBooks.filter((book) => filter.includes(book.category));

  return (
    <div
      className="pt-40 lg:px-40 py-60 min-h-screen"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="flex justify-center items-center mb-6">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          onClick={handleFilterToggle}
          className="ml-4 w-12 h-12 rounded-full bg-black text-white border-2 border-white flex justify-center items-center transition duration-300 hover:bg-white hover:border-black hover:text-black focus:outline-none"
        >
          <FiFilter className="w-6 h-6" style={{ strokeWidth: 2 }} />
        </button>
        <Sort onSortChange={handleSortChange} /> {/* Add Sort Component */}
      </div>

      {isFilterVisible && (
        <Filter
          toggleFilter={toggleFilter}
          filter={filter}
          categories={categories}
        />
      )}

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
