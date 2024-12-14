import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TakeawayCard = ({ takeaway }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsExpansion(contentRef.current.scrollHeight > 150);
    }
  }, [takeaway]);

  return (
    <div
      className="bg-[#2A2A2A] rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
      style={{ height: "min-content" }}
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        className="text-2xl text-gray-500 mb-4"
      />
      <div
        ref={contentRef}
        className={`text-gray-300 whitespace-pre-wrap transition-all duration-300 ${
          !needsExpansion ? "" : isExpanded ? "" : "line-clamp-6"
        }`}
      >
        {takeaway}
      </div>
      {needsExpansion && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default TakeawayCard;
