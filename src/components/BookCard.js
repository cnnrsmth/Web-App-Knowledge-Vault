import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      className="shadow-lg rounded-lg p-6 flex flex-col hover:cursor-pointer group"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      <div className="relative mb-4 w-full">
        <img
          src={book.image}
          alt={book.title}
          className="rounded-lg w-full object-cover h-[30vh]"
        />
        {/* Overlay for type */}
        <div className="absolute top-2 right-2 rounded-lg px-2 py-1 text-gray-600 transition-colors duration-200 bg-gray-200 group-hover:bg-gray-300 text-xs font-bold">
          {book.type}
        </div>
      </div>
      <div className="flex-grow text-center">
        <div className="text-3xl text-white font-karla font-extrabold mb-4 uppercase">
          {book.title}
        </div>
        <p className="mt-2 text-gray-400 font-roboto text-xl">{book.summary}</p>{" "}
        {/* Increased font size */}
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
