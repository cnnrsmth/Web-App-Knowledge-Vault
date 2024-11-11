import React from "react";

function Filter({ categories, toggleFilter, filter }) {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`font-karla text-lg font-medium border rounded-full transition-colors duration-200 px-6 py-3 ${
            filter.includes(category)
              ? "bg-white text-black font-bold border-black" // Selected state
              : "border-gray-500 text-gray-200 hover:bg-gray-600 hover:text-white" // Non-selected state with improved contrast
          }`}
          onClick={() => toggleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
