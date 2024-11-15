import React, { useState } from "react";

const DetailedNotes = ({ notes }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-white rounded-lg">
      {Object.entries(notes).map(([key, value]) => (
        <div
          key={key}
          className="cursor-pointer py-6 transition-colors" // Increased padding for more space
          onClick={() => toggleSection(key)}
        >
          <div className="flex justify-between items-center font-karla font-bold text-xl md:text-2xl mb-4">
            {/* Added margin bottom to separate the key from the horizontal rule */}
            <span>{key}</span>
            <button
              className={`w-8 h-8 text-white rounded-full font-bold flex justify-center items-center transition-colors leading-none ${
                openSections[key] ? "bg-gray-800" : "bg-black"
              }`}
              style={{ lineHeight: "3" }}
            >
              {openSections[key] ? "-" : "+"}
            </button>
          </div>

          {/* Single Horizontal Rule placed immediately below the key */}
          <hr
            className={`transition-all duration-500 ease-in-out border-t border-black mt-4 ${
              openSections[key] ? "translate-y-0" : "translate-y-6"
            }`}
          />

          <div
            className={`py-2 text-lg md:text-lg text-gray-800 font-roboto transition-all duration-500 ease-in-out`}
            style={{
              maxHeight: openSections[key] ? "500px" : "0", // Adjust max-height for transition
              opacity: openSections[key] ? "1" : "0", // Fade in/out content
              overflow: "hidden", // Hide content when collapsed
            }}
          >
            {/* Text fades in while the hr moves down */}
            <p className={`transition-all duration-500 ease-in-out`}>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedNotes;
