import React from "react";
import TakeawayCard from "./TakeawayCard";
import { useParams } from "react-router-dom";
import goldStar from "../assets/gold.png";
import fadedGoldStar from "../assets/fadedgold.png";

const BookDetails = ({ books }) => {
  const { id } = useParams();

  // Find the book with the matching id
  const book = books.find((book) => book.id === id);

  // Render a message if the book is not found
  if (!book) {
    return <div>Book not found</div>;
  }

  const renderStarRating = () => {
    const rating = book.rating;
    const fullStars = Math.floor(rating);
    const fadedStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center justify-center mt-4">
        {[...Array(fullStars)].map((_, index) => (
          <img
            key={index}
            src={goldStar}
            alt="Gold Star"
            className="w-6 h-6 mx-1"
          />
        ))}
        {[...Array(fadedStars)].map((_, index) => (
          <img
            key={index}
            src={fadedGoldStar}
            alt="Faded Gold Star"
            className="w-6 h-6 mx-1"
          />
        ))}
      </div>
    );
  };

  const renderTakeawayCards = () => {
    return book.takeaways.map((takeaway, index) => (
      <TakeawayCard key={index} number={index + 1} takeaway={takeaway} />
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
        {renderStarRating()}
      </div>
      <div className="mx-auto w-2/3">
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4 my-4">
          Key Takeaways
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderTakeawayCards()}
        </div>
      </div>
    </>
  );
};

export default BookDetails;
