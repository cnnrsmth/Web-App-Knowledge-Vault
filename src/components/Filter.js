import React from "react";
import data from "../data/books";

function Filter({ toggleFilter, filter }) {
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`font-karla bg-primaryblue border-primary-600 hover:bg-secondaryblue text-white text-sm rounded inline-flex items-center justify-center ${
            filter.includes(category) ? "bg-secondaryblue" : ""
          }`}
          style={{ margin: "16px", padding: "10px" }}
          onClick={() => toggleFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
