import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import TakeawayCard from "./TakeawayCard";
import StarSystem from "./StarSystem";
import QuoteCard from "./QuoteCard";
import TakeawayPara from "./TakeawayPara";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found</div>;
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
        className={`grid gap-4 ${
          row.length === 2
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {row.map((takeaway, index) => (
          <TakeawayCard
            key={index}
            number={index + 1}
            takeaway={takeaway}
            className="border border-white rounded-lg p-4 transition-colors duration-200 hover:bg-gray-200" // Lighter border
          />
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
        className={`grid gap-4 ${
          row.length === 2
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {row.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    ));
  };

  const renderNotes = () => {
    return Object.entries(book.notes).map(([key, value]) => (
      <TakeawayPara key={key} takeaway={{ key, value }} />
    ));
  };

  return (
    <>
      <div className="pt-40 py-16 mx-auto text-center md:w-1/3 w-full">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg object-cover h-[30vh] mx-auto my-4"
        />
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl py-4 lg:ml-0 my-4">
          {book.title} - Summary with Notes and Highlights
        </h1>
        <p className="font-roboto my-4">{book.summary}</p>
        <div className="flex justify-center py-4">
          <div className="w-1/4 bg-black h-1"></div>
        </div>
        <StarSystem key={book.id} book={book} />
      </div>
      <div className="absolute top-5 left-[calc(16%)] pt-4 pl-4 z-10">
        <BackButton />
      </div>

      {/* Black Background Wrapper for Key Takeaways and Key Quotes */}
      <div className="">
        <div
          className="text-white py-16 w-full px-4 md:px-20 lg:px-60"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="px-4 md:px-10 lg:px-20">
            <h1 className="font-karla font-bold text-2xl md:text-3xl pb-8 mt-10">
              Key Takeaways
            </h1>
            {renderTakeawayCards()} {/* Render Takeaway Cards */}
            <h1 className="font-karla font-bold text-2xl md:text-3xl pb-8 mt-10">
              Key Quotes
            </h1>
            {renderQuoteCards()} {/* Render Quote Cards */}
          </div>
        </div>
      </div>

      {/* Separate Detailed Notes Section */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-10 lg:px-20 mt-10 relative">
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4">
          Detailed Notes
        </h1>
        {renderNotes()} {/* Render Notes */}
      </div>
    </>
  );
};

export default BookDetails;
