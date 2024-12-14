import React from "react";

const Filter = ({ toggleFilter, filter, categories }) => {
  const isAllSelected = filter.length === 0;

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3 pt-1 pb-2">
      <button
        onClick={() => toggleFilter("All")}
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${
            isAllSelected
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
          }
          transform hover:-translate-y-0.5 hover:shadow-lg
        `}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => toggleFilter(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              filter.includes(category) && !isAllSelected
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
            }
            transform hover:-translate-y-0.5 hover:shadow-lg
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
