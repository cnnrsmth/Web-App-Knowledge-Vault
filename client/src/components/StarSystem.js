import React from "react";
import goldStar from "../assets/gold.png";
import fadedGoldStar from "../assets/fadedgold.png";

function StarSystem({ book }) {
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
}

export default StarSystem;
