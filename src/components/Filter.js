import React from "react";
import data from "../data/books";

function Filter({ toggleFilter, filter }) {
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`font-karla text-lg font-medium border rounded-full transition-colors duration-200 px-6 py-3 ${
            filter.includes(category)
              ? "bg-white text-black font-bold border-black" // Selected state
              : "border-gray-500 hover:bg-gray-600 hover:text-gray-100" // Default state
          }`}
          onClick={() => toggleFilter(category)}
          style={{
            backgroundColor: filter.includes(category) ? "#FFFFFF" : "#2A2A2A",
            color: filter.includes(category) ? "#000000" : "#B0B0B0",
            lineHeight: "1.5",
            minHeight: "38px",
            margin: "4px",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
