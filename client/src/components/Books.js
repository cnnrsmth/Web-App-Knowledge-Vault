import React, { useState } from "react";
import BookCard from "./BookCard";
import Filter from "./Filter";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

const Books = ({ bookNotes }) => {
  const [filter, setFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sortAscending, setSortAscending] = useState(true);

  // Get unique categories from book notes
  const categories = [...new Set(bookNotes.map((book) => book.category))];

  const toggleFilter = (category) => {
    if (category === "All") {
      // Always set to empty array (which means "All" is selected)
      setFilter([]);
      return;
    }

    // If all categories are about to be selected, switch to "All" (empty array)
    const newFilter = filter.includes(category)
      ? filter.filter((c) => c !== category)
      : [...filter, category];

    if (newFilter.length === categories.length) {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  };

  const filteredBooks = bookNotes
    .filter((book) => {
      // Search in both title and author
      const matchesSearch =
        !searchTerm ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by category
      const matchesFilter =
        filter.length === 0 || filter.includes(book.category);

      // Both conditions must be true
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      return sortAscending ? a.rating - b.rating : b.rating - a.rating;
    });

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      {/* Header Controls */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-karla font-bold text-white">
            Knowledge Vault
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsSearchVisible(!isSearchVisible);
                setIsFilterVisible(false);
              }}
              className={`p-3 rounded-full transition-all duration-300 ${
                searchTerm || isSearchVisible
                  ? "bg-white text-black"
                  : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
              }`}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              onClick={() => {
                setIsFilterVisible(!isFilterVisible);
                setIsSearchVisible(false);
              }}
              className={`p-3 rounded-full transition-all duration-300 ${
                isFilterVisible
                  ? "bg-white text-black"
                  : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
              }`}
            >
              <FontAwesomeIcon icon={faFilter} />
            </button>
            <button
              onClick={() => setSortAscending(!sortAscending)}
              className="p-3 rounded-full bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition-all duration-300"
              title={
                sortAscending
                  ? "Sort by rating (high to low)"
                  : "Sort by rating (low to high)"
              }
            >
              <FontAwesomeIcon
                icon={faSort}
                className={`transform transition-all duration-300 ${
                  !sortAscending ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Expandable Search */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isSearchVisible ? "max-h-20 opacity-100 mb-8" : "max-h-0 opacity-0"
          }`}
        >
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Expandable Filter */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isFilterVisible ? "max-h-20 opacity-100 mb-8" : "max-h-0 opacity-0"
          }`}
        >
          <Filter
            toggleFilter={toggleFilter}
            filter={filter}
            categories={categories}
          />
        </div>
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
