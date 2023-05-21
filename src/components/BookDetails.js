import React from "react";
import { useParams } from "react-router-dom";

import TakeawayCard from "./TakeawayCard";
import StarSystem from "./StarSystem";
import QuoteCard from "./QuoteCard";
import TakeawayPara from "./TakeawayPara";

import goldStar from "../assets/gold.png";
import fadedGoldStar from "../assets/fadedgold.png";

const BookDetails = ({ books }) => {
  const { id } = useParams();

  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const renderTakeawayCards = () => {
    return book.takeaways.map((takeaway, index) => (
      <TakeawayCard key={index} number={index + 1} takeaway={takeaway} />
    ));
  };

  const renderQuoteCards = () => {
    return book.quotes.map((quote, index) => (
      <QuoteCard key={index} quote={quote} />
    ));
  };

  const renderNotes = () => {
    return Object.entries(book.notes).map(([key, value]) => (
      <TakeawayPara key={key} takeaway={{ key, value }} />
    ));
  };

  return (
    <>
      <div className="pt-40 mx-auto text-center md:w-1/3 w-full">
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
          <div className="w-1/4 bg-primaryblue h-1"></div>
        </div>
        <StarSystem key={book.id} book={book} />
      </div>
      <div className="mx-auto w-2/3">
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-8 mt-10">
          Key Takeaways
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderTakeawayCards()}
        </div>
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-8 mt-10">
          Key Quotes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderQuoteCards()}
        </div>
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4 mt-10">
          Detailed Notes
        </h1>
        {renderNotes()}
      </div>
    </>
  );
};

export default BookDetails;
