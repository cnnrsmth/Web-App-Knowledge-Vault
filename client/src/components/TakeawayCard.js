// TakeawayCard component
const TakeawayCard = ({ number, takeaway }) => {
  return (
    <div
      className="rounded-3xl shadow-lg p-6 mb-4 h-[160px] md:h-[200px] lg:h-[240px] flex flex-col justify-center"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-karla font-bold text-center mt-4">
        {takeaway}
      </h2>
    </div>
  );
};

export default TakeawayCard;
