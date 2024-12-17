import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faSort,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import LandingAnimation from "./LandingAnimation";
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
    <LandingAnimation>
      <div className="min-h-screen bg-black py-12 px-4">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="relative z-20 flex flex-col md:flex-row gap-4 mt-12">
            {/* Search */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>

            {/* Type Filter */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
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
            </motion.div>

            {/* Sort */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>
          </div>
        </motion.div>

        {/* Book Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredAndSortedBooks.map((book, index) => (
              <motion.div
                key={book.id || Math.random()}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="break-inside-avoid"
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </LandingAnimation>
  );
};

export default Books;
