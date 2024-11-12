import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Using react-icons for the search icon

function Search({ searchTerm, setSearchTerm }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the search bar expansion
  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle input changes and call the onSearch function
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update search term
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Search Icon with click handler */}
      <button
        onClick={handleIconClick}
        className="w-12 h-12 rounded-full bg-black text-white border-2 border-white flex justify-center items-center transition duration-300 hover:bg-white hover:border-black hover:text-black focus:outline-none"
      >
        <FiSearch className="w-6 h-6" style={{ strokeWidth: 2 }} />
      </button>

      {/* Expanding search input */}
      {isExpanded && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search by title or author"
          className="bg-white text-black border border-gray-500 rounded-full px-4 py-2 text-lg transition-all duration-300 ease-in-out transform w-64 focus:outline-none"
        />
      )}
    </div>
  );
}

export default Search;
