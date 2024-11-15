// TakeawayCard component
const TakeawayCard = ({ number, takeaway }) => {
  return (
    <div
      className="rounded-3xl shadow-lg p-6 mb-4 min-h-[160px] md:min-h-[200px] lg:min-h-[240px] flex flex-col justify-center"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-karla font-bold text-center mt-4 break-words">
        {takeaway}
      </h2>
    </div>
  );
};

export default TakeawayCard;
