import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TakeawayCard from "./TakeawayCard";
import StarSystem from "./StarSystem";
import QuoteCard from "./QuoteCard";
import DetailedNotes from "./DetailedNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { createSlug } from "../utils/helpers";

const BookDetails = ({ bookNotes }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find book by matching slugified title
  const book = bookNotes.find((book) => createSlug(book.title) === slug);

  useEffect(() => {
    if (!book && bookNotes.length > 0) {
      navigate("/knowledge-vault");
    }
  }, [book, bookNotes, navigate]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-karla text-gray-600">Book not found</div>
      </div>
    );
  }

  const renderTakeawayCards = () => {
    const takeaways = book.takeaways;
    const rows = [];
    let i = 0;
    let rowIndex = 0;

    while (i < takeaways.length) {
      if (rowIndex % 2 === 0) {
        rows.push(takeaways.slice(i, i + 3));
        i += 3;
      } else {
        rows.push(takeaways.slice(i, i + 2));
        i += 2;
      }
      rowIndex += 1;
    }

    return rows.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className={`grid gap-8 ${
          row.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {row.map((takeaway, index) => (
          <TakeawayCard key={index} number={index + 1} takeaway={takeaway} />
        ))}
      </div>
    ));
  };

  const renderQuoteCards = () => {
    const quotes = book.quotes;
    const rows = [];
    let i = 0;
    let rowIndex = 0;

    while (i < quotes.length) {
      if (rowIndex % 2 === 0) {
        rows.push(quotes.slice(i, i + 3));
        i += 3;
      } else {
        rows.push(quotes.slice(i, i + 2));
        i += 2;
      }
      rowIndex += 1;
    }

    return rows.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className={`grid gap-8 ${
          row.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {row.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div
        id="hero"
        className="relative bg-gradient-to-b from-black to-[#0A0A0A] text-white"
      >
        <div className="absolute top-8 left-8 z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Book Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
              </div>

              {/* Book Info */}
              <div className="w-full md:w-2/3 space-y-4">
                <h1 className="text-3xl md:text-4xl font-karla font-bold">
                  {book.title}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-karla">
                  {book.author}
                </h2>
                <div>
                  <StarSystem book={book} />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {book.summary}
                </p>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="bg-[#2A2A2A] px-3 py-1.5 rounded-full text-gray-300">
                    {book.category}
                  </span>
                  <span className="bg-[#2A2A2A] px-3 py-1.5 rounded-full text-gray-300">
                    {book.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with subtle separators */}
      <div className="relative">
        {/* Key Takeaways Section */}
        <section
          id="takeaways"
          className="relative bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-20"
        >
          <div className="container mx-auto px-4">
            {/* Enhanced separator */}
            <div className="absolute inset-x-0 top-0">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Minimalist Section Header */}
            <div className="flex items-center justify-center mb-16">
              <h2 className="text-2xl md:text-3xl font-karla font-medium text-white/90">
                Key Takeaways
              </h2>
            </div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {renderTakeawayCards()}
            </div>
          </div>
        </section>

        {/* Key Quotes Section */}
        <section
          id="quotes"
          className="relative bg-gradient-to-b from-[#141414] to-[#0A0A0A] py-20"
        >
          <div className="container mx-auto px-4">
            {/* Enhanced separator */}
            <div className="absolute inset-x-0 top-0">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Minimalist Section Header */}
            <div className="flex items-center justify-center mb-16">
              <h2 className="text-2xl md:text-3xl font-karla font-medium text-white/90">
                Key Quotes
              </h2>
            </div>

            <div className="grid gap-8 max-w-6xl mx-auto">
              {renderQuoteCards()}
            </div>
          </div>
        </section>

        {/* Detailed Notes Section */}
        <section
          id="notes"
          className="relative bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-20"
        >
          <div className="container mx-auto px-4">
            {/* Enhanced separator */}
            <div className="absolute inset-x-0 top-0">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div className="h-[3px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Minimalist Section Header */}
            <div className="flex items-center justify-center mb-16">
              <h2 className="text-2xl md:text-3xl font-karla font-medium text-white/90">
                Detailed Notes
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <DetailedNotes notes={book.notes} />
            </div>
          </div>
        </section>

        {/* Updated Navigation with hero section */}
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
          <div className="space-y-4">
            {["hero", "takeaways", "quotes", "notes"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-2 h-2 block rounded-full bg-gray-600 hover:bg-white transition-colors duration-200"
                title={
                  section === "hero"
                    ? "Top"
                    : section.charAt(0).toUpperCase() + section.slice(1)
                }
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BookDetails;
