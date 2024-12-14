import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-8 max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title or author..."
          className="
            w-full px-6 py-4 pl-12
            bg-[#2A2A2A] 
            text-white placeholder-gray-400
            rounded-xl
            outline-none
            transition-all duration-300
            border-2 border-transparent
            focus:border-white/20
            hover:border-white/10
            font-karla
          "
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
};

export default Search;
