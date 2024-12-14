import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DetailedNotes = ({ notes }) => {
  const [expandedNotes, setExpandedNotes] = useState(new Set());

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto">
      {Object.entries(notes || {}).map(([section, content]) => (
        <div
          key={section}
          className="bg-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-fit"
        >
          <button
            onClick={() => toggleNote(section)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <h3 className="text-white text-xl font-bold">{section}</h3>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-gray-400 transition-transform duration-300 ${
                expandedNotes.has(section) ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`px-6 transition-all duration-300 ${
              expandedNotes.has(section)
                ? "max-h-[1000px] pb-6 opacity-100"
                : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <p className="text-gray-300 whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedNotes;
