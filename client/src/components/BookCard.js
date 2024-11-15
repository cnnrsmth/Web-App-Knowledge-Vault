import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StarSystemLight from "./StarSystemLight";
import OverlayIcon from "./OverlayIcon"; // Import the OverlayIcon component

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      className="shadow-lg rounded-lg p-6 flex flex-col hover:cursor-pointer group relative"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      <div className="relative mb-4 w-full">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg w-full object-cover h-[30vh]"
        />

        {/* OverlayIcon for content type on hover */}
        <OverlayIcon type={book.type} />
      </div>

      <div className="flex-grow text-center">
        <div className="text-3xl text-white font-karla font-extrabold mb-4 uppercase">
          {book.title}
        </div>
        <div className="text-2xl text-white font-karla font-extrabold mb-4">
          {book.author}
        </div>

        <StarSystemLight book={book} />

        <p className="mt-4 text-gray-400 font-roboto text-xl">{book.summary}</p>
      </div>

      <div className="flex items-center justify-end space-x-4 mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 bg-black group-hover:bg-white">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white transition-colors duration-200 group-hover:text-black"
          />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
