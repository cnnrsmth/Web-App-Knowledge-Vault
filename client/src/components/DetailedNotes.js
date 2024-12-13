import React, { useState } from "react";

// ... imports remain the same ...

const DetailedNotes = ({ notes }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-[#2A2A2A] rounded-lg">
      {Object.entries(notes).map(([key, value]) => (
        <div
          key={key}
          className="cursor-pointer py-6 transition-colors"
          onClick={() => toggleSection(key)}
        >
          <div className="flex justify-between items-center font-karla font-bold text-xl md:text-2xl mb-4 text-white px-6">
            <span>{key}</span>
            <button
              className={`w-8 h-8 rounded-full font-bold flex justify-center items-center transition-colors leading-none ${
                openSections[key] ? "bg-gray-700" : "bg-gray-800"
              }`}
              style={{ lineHeight: "3" }}
            >
              {openSections[key] ? "-" : "+"}
            </button>
          </div>

          <hr
            className={`transition-all duration-500 ease-in-out border-t border-gray-700 mt-4 mx-6 ${
              openSections[key] ? "translate-y-0" : "translate-y-6"
            }`}
          />

          <div
            className={`py-2 text-lg md:text-lg text-gray-300 font-roboto transition-all duration-500 ease-in-out px-6`}
            style={{
              maxHeight: openSections[key] ? "500px" : "0",
              opacity: openSections[key] ? "1" : "0",
              overflow: "hidden",
            }}
          >
            <p className={`transition-all duration-500 ease-in-out`}>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedNotes;
