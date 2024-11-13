import React from "react";

function StarSystemLight({ book }) {
  const rating = book.rating;
  const filledCircles = Math.floor(rating); // Number of filled circles based on the rating
  const totalCircles = 5; // Total number of circles

  return (
    <div className="flex items-center justify-center mt-3 space-x-1">
      {[...Array(totalCircles)].map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full border-2 border-white`} // Even smaller circles
          style={{
            backgroundColor: index < filledCircles ? "#ffffff" : "transparent", // White for filled circles
            position: "relative",
          }}
        >
          {/* No gap, fully filled circles */}
        </div>
      ))}
    </div>
  );
}

export default StarSystemLight;
