import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col hover:cursor-pointer group"
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
        <div className="text-2xl text-black font-karla font-extrabold mb-4 uppercase">
          {book.title}
        </div>
        <p className="mt-2 text-gray-600 font-roboto">{book.summary}</p>
      </div>
      <div className="flex items-center justify-end space-x-4 mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 bg-white group-hover:bg-black">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-black transition-colors duration-200 group-hover:text-white"
          />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
