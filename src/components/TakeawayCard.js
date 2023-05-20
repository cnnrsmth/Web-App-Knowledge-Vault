import React, { useState } from "react";

const TakeawayCard = ({ number, takeaway }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative rounded-lg shadow-lg p-6 mb-4 h-[160px] md:h-[200px] lg:h-[240px] bg-gradient-to-b from-primaryblue to-primaryblue-transparent flex flex-col justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className={`text-white text-8xl md:text-10xl lg:text-12xl font-karla font-bold ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {number}
        </h2>
      </div>
      <p
        className={`text-white text-m md:text-l lg:text-xl font-roboto font-bold text-center mt-4 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {takeaway}
      </p>
    </div>
  );
};

export default TakeawayCard;
