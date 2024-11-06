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
              ? "bg-black text-white font-bold border-black" // Selected state
              : "bg-white text-black border-black hover:bg-gray-200" // Default with hover effect
          }`}
          onClick={() => toggleFilter(category)}
          style={{ lineHeight: "1.5", minHeight: "38px", margin: "4px" }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
