import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import TakeawayCard from "./TakeawayCard";
import StarSystem from "./StarSystem";
import QuoteCard from "./QuoteCard";
import DetailedNotes from "./DetailedNotes";

const BookDetails = ({ bookNotes }) => {
  const { id } = useParams();
  const book = bookNotes.find((book) => book.id === id);

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
      <div className="relative bg-gradient-to-b from-black to-[#0A0A0A] text-white">
        <div className="absolute top-5 left-[calc(16%)] pt-4 pl-4 z-10">
          <BackButton />
        </div>

        <div className="container mx-auto px-4 pt-40 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Book Image */}
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-lg object-cover h-[40vh] mx-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>

            {/* Book Info */}
            <div className="mt-8 space-y-6">
              <h1 className="text-4xl md:text-5xl font-karla font-bold">
                {book.title}
              </h1>
              <div className="flex justify-center">
                <StarSystem key={book.id} book={book} />
              </div>
              <p className="text-xl md:text-2xl font-karla text-gray-300 max-w-2xl mx-auto">
                {book.summary}
              </p>
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
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <h2 className="text-3xl md:text-4xl font-karla font-bold mb-10 text-center text-white">
              Key Takeaways
            </h2>
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
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <h2 className="text-3xl md:text-4xl font-karla font-bold mb-10 text-center text-white">
              Key Quotes
            </h2>
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
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <h2 className="text-3xl md:text-4xl font-karla font-bold mb-10 text-center text-white">
              Detailed Notes
            </h2>
            <DetailedNotes notes={book.notes} />
          </div>
        </section>

        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-10">
          <div className="space-y-4">
            {["takeaways", "quotes", "notes"].map((section) => (
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
                title={section.charAt(0).toUpperCase() + section.slice(1)}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BookDetails;
