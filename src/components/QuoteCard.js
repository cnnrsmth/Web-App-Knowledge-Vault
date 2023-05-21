import React from "react";
import quoteimg from "../assets/quote.png";

function QuoteCard({ quote }) {
  return (
    <div className="relative">
      <img src={quoteimg} alt="quote" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-darkgrey font-roboto font-bold text-m md:text-l lg:text-xl">
          {quote}
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
