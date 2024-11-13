import React from "react";

function StarSystem({ book }) {
  const rating = book.rating;
  const filledCircles = Math.floor(rating); // Number of filled circles based on the rating
  const totalCircles = 5; // Total number of circles

  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      {[...Array(totalCircles)].map((_, index) => (
        <div
          key={index}
          className={`w-10 h-10 rounded-full border-4 border-gray-800`} // Same outline color for all circles
          style={{
            backgroundColor: "transparent", // Outer circle is transparent for both filled and unfilled
            position: "relative",
          }}
        >
          {/* Inner circle (blob) for filled circles */}
          {index < filledCircles && (
            <div
              className="absolute top-1 left-1 right-1 bottom-1 rounded-full"
              style={{
                backgroundColor: "#2A2A2A", // The dark blob color for filled circles
                margin: "1px", // Reduced gap between the blob and the circle outline
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StarSystem;
