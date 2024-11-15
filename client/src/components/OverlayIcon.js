import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faMicrophone,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  book: faBook,
  podcast: faMicrophone,
  article: faNewspaper,
};

const OverlayIcon = ({ type }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FontAwesomeIcon
        icon={iconMap[type] || faBook}
        className="text-white text-5xl"
      />
    </div>
  );
};

export default OverlayIcon;
