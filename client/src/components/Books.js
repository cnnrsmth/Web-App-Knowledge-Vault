import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faPodcast,
  faNewspaper,
  faSearch,
  faFilter,
  faSort,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import BookCard from "./BookCard";

const Books = ({ bookNotes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortAscending, setSortAscending] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(bookNotes.map((book) => book.category)),
    ];
    setCategories(uniqueCategories);
  }, [bookNotes]);

  const toggleSearch = () => {
    console.log("Toggle clicked", isSearchExpanded);
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchTerm("");
    }
  };

  const filteredAndSortedBooks = [...bookNotes]
    .filter((book) => {
      const matchesSearch =
        !searchTerm ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = filterType === "all" || book.type === filterType;
      const matchesCategory =
        filterCategory === "all" || book.category === filterCategory;

      return matchesSearch && matchesType && matchesCategory;
    })
    .sort((a, b) =>
      sortAscending ? a.rating - b.rating : b.rating - a.rating
    );

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full animate-pulse delay-700 blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center py-20">
            <h1 className="text-5xl md:text-6xl font-karla font-bold text-white mb-4 tracking-tight">
              Knowledge Vault
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-karla">
              Your personal library of insights from books, courses, podcasts,
              and articles.
            </p>

            <div className="flex justify-center gap-12 mt-12">
              <div className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-white/30 group-hover:text-white text-3xl transition-colors duration-300"
                />
              </div>
              <div className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white/30 group-hover:text-white text-3xl transition-colors duration-300"
                />
              </div>
              <div className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
                <FontAwesomeIcon
                  icon={faPodcast}
                  className="text-white/30 group-hover:text-white text-3xl transition-colors duration-300"
                />
              </div>
              <div className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="text-white/30 group-hover:text-white text-3xl transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-20 flex flex-col md:flex-row gap-4 mt-12">
          {/* Search */}
          <div className="flex-1">
            <div className="relative h-12">
              <div
                className={`
                  absolute left-0 top-0
                  bg-[#2A2A2A] rounded-xl h-12
                  transition-all duration-300 ease-in-out
                  ${isSearchExpanded ? "w-full" : "w-12"}
                `}
                style={{
                  width: isSearchExpanded ? "100%" : "48px",
                }}
              >
                <button
                  onClick={toggleSearch}
                  className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white z-20"
                >
                  <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
                </button>

                <div
                  className={`
                    transition-opacity duration-300
                    ${
                      isSearchExpanded
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }
                  `}
                >
                  <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent text-white w-full h-12 px-4 py-3 pl-12 focus:outline-none placeholder-gray-500"
                  />

                  {searchTerm && (
                    <button
                      onClick={toggleSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white z-10"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none bg-[#2A2A2A] text-white rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <FontAwesomeIcon
              icon={faFilter}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="appearance-none bg-[#2A2A2A] text-white rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="all">All Types</option>
              <option value="book">Books</option>
              <option value="course">Courses</option>
              <option value="podcast">Podcasts</option>
              <option value="article">Articles</option>
            </select>
            <FontAwesomeIcon
              icon={faFilter}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortAscending ? "asc" : "desc"}
              onChange={(e) => setSortAscending(e.target.value === "asc")}
              className="appearance-none bg-[#2A2A2A] text-white rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="desc">Highest Rated</option>
              <option value="asc">Lowest Rated</option>
            </select>
            <FontAwesomeIcon
              icon={faSort}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Book Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredAndSortedBooks.map((book) => (
            <div key={book.id || Math.random()} className="break-inside-avoid">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
