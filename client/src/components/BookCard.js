import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import StarSystemLight from "./StarSystemLight";
import OverlayIcon from "./OverlayIcon";
import useInView from "../hooks/useInView";

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleClick = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div
        onClick={handleClick}
        className="shadow-lg rounded-xl p-6 flex flex-col hover:cursor-pointer group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        style={{ backgroundColor: "#2A2A2A" }}
      >
        <div className="relative mb-6 w-full overflow-hidden rounded-lg">
          <div className="relative">
            <img
              src={book.image}
              alt={book.title}
              className="w-full object-cover h-[30vh] transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <OverlayIcon type={book.type} />
        </div>

        <div className="flex-grow text-center space-y-4">
          <div className="text-2xl text-white font-karla font-bold uppercase tracking-wide">
            {book.title}
          </div>
          <div className="text-xl text-gray-300 font-karla">{book.author}</div>

          <div className="flex justify-center">
            <StarSystemLight book={book} />
          </div>

          <p className="mt-4 text-gray-400 font-roboto text-lg line-clamp-3 leading-relaxed">
            {book.summary}
          </p>
        </div>

        <div className="flex items-center justify-end mt-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-black group-hover:bg-white transform group-hover:scale-110">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white transition-colors duration-300 group-hover:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
