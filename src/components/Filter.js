import React from "react";
import data from "../data/books";

function Filter({ toggleFilter, filter }) {
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`font-karla border rounded-full transition-colors duration-200 px-4 py-2 text-sm ${
            filter.includes(category)
              ? "bg-white text-black font-bold border-black" // Selected state: white background, black text
              : "border-gray-500 hover:bg-gray-400" // Default with hover effect
          }`}
          onClick={() => toggleFilter(category)}
          style={{
            backgroundColor: filter.includes(category) ? "#FFFFFF" : "#2A2A2A", // Default background color when not selected
            color: filter.includes(category) ? "#000000" : "#FFFFFF", // Default text color when not selected
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
