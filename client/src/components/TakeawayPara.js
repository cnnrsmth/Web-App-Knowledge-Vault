import React from "react";

function TakeawayPara({ takeaway }) {
  return (
    <div className="py-4">
      <h2 className="text-darkgrey font-karla font-bold text-xl my-2">
        {takeaway.key}
      </h2>
      <p className="font-roboto text-gray-700">{takeaway.value}</p>
    </div>
  );
}

export default TakeawayPara;
