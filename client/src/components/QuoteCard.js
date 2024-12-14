import React, { useState, useEffect, useRef } from "react";

const QuoteCard = ({ quote }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [quote]);

  return (
    <div
      className={`rounded-3xl shadow-lg p-6 mb-4 flex flex-col justify-between relative ${
        isExpanded ? "z-10" : ""
      }`}
      style={{
        backgroundColor: "#2A2A2A",
        gridRow: isExpanded ? "span 2" : "span 1",
        transition: "all 0.3s ease",
      }}
    >
      <div
        ref={contentRef}
        className={`text-white text-lg md:text-xl lg:text-2xl font-karla font-bold italic break-words ${
          isExpanded ? "" : "line-clamp-5"
        }`}
      >
        "{quote}"
      </div>

      {isOverflowing && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white text-sm mt-2 transition-colors duration-200"
        >
          {isExpanded ? "Show Less" : "..."}
        </button>
      )}
    </div>
  );
};

export default QuoteCard;
