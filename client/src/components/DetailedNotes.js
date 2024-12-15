import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useInView from "../hooks/useInView";

const NoteSection = ({
  section,
  content,
  needsExpansion,
  expandedNotes,
  toggleNote,
  contentRefs,
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out break-inside-avoid mb-6
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div className="bg-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
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
    </div>
  );
};

const DetailedNotes = ({ notes }) => {
  const [expandedNotes, setExpandedNotes] = useState(new Set());
  const [needsExpansion, setNeedsExpansion] = useState({});
  const contentRefs = useRef({});

  useEffect(() => {
    const newNeedsExpansion = {};
    Object.keys(notes || {}).forEach((section) => {
      const element = contentRefs.current[section];
      if (element) {
        newNeedsExpansion[section] = element.scrollHeight > 150;
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
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
      {Object.entries(notes || {}).map(([section, content]) => (
        <NoteSection
          key={section}
          section={section}
          content={content}
          needsExpansion={needsExpansion}
          expandedNotes={expandedNotes}
          toggleNote={toggleNote}
          contentRefs={contentRefs}
        />
      ))}
    </div>
  );
};

export default DetailedNotes;
