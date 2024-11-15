// Sort.js
import React, { useState } from "react";
import { FiArrowUp, FiArrowDown, FiMinus } from "react-icons/fi"; // Import icons

const Sort = ({ onSortChange }) => {
  const [sortOrder, setSortOrder] = useState("neutral");

  const toggleSortOrder = () => {
    const nextSortOrder =
      sortOrder === "neutral"
        ? "ascending"
        : sortOrder === "ascending"
        ? "descending"
        : "neutral";

    setSortOrder(nextSortOrder);
    onSortChange(nextSortOrder);
  };

  return (
    <button
      onClick={toggleSortOrder}
      className="ml-4 w-12 h-12 rounded-full bg-black text-white border-2 border-white flex justify-center items-center transition duration-300 hover:bg-white hover:border-black hover:text-black focus:outline-none"
    >
      {sortOrder === "ascending" && <FiArrowUp className="w-6 h-6" />}
      {sortOrder === "descending" && <FiArrowDown className="w-6 h-6" />}
      {sortOrder === "neutral" && <FiMinus className="w-6 h-6" />}
    </button>
  );
};

export default Sort;
