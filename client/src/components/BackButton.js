import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Left arrow

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/book-notes")}
      className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white border-2 border-transparent transition-all duration-200 flex items-center justify-center group hover:bg-black hover:border-white hover:text-white active:bg-black active:border-white active:text-white"
      style={{
        fontFamily: "Karla, sans-serif",
      }}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-black group-hover:text-white transition-colors duration-200"
      />
    </button>
  );
};

export default BackButton;
