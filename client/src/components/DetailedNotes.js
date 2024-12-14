import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DetailedNotes = ({ notes }) => {
  const [expandedNotes, setExpandedNotes] = useState(new Set());
  const [needsExpansion, setNeedsExpansion] = useState({});
  const contentRefs = useRef({});

  useEffect(() => {
    // Check which sections need expansion buttons
    const newNeedsExpansion = {};
    Object.keys(notes || {}).forEach((section) => {
      const element = contentRefs.current[section];
      if (element) {
        newNeedsExpansion[section] = element.scrollHeight > 150; // 150px threshold
      }
    });
    setNeedsExpansion(newNeedsExpansion);
  }, [notes]);

  const toggleNote = (section) => {
    const newExpanded = new Set(expandedNotes);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedNotes(newExpanded);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(notes || {}).map(([section, content]) => (
        <div
          key={section}
          className="bg-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          style={{ height: "min-content" }}
        >
          <div className="px-6 py-4">
            <h3 className="text-white text-xl font-bold mb-4">{section}</h3>
            <div
              ref={(el) => (contentRefs.current[section] = el)}
              className={`text-gray-300 whitespace-pre-wrap transition-all duration-300 ${
                !needsExpansion[section]
                  ? ""
                  : expandedNotes.has(section)
                  ? ""
                  : "line-clamp-6"
              }`}
            >
              {content}
            </div>
            {needsExpansion[section] && (
              <button
                onClick={() => toggleNote(section)}
                className="mt-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>
                  {expandedNotes.has(section) ? "Show less" : "Show more"}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    expandedNotes.has(section) ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedNotes;
