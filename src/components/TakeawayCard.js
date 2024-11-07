const TakeawayCard = ({ number, takeaway }) => {
  return (
    <div
      className="rounded-3xl shadow-lg p-6 mb-4 h-[160px] md:h-[200px] lg:h-[240px] flex flex-col justify-center border-[0.5px]"
      style={{ backgroundColor: "#2A2A2A" }}
    >
      <h2 className="text-white text-m md:text-l lg:text-xl font-roboto font-bold text-center mt-4">
        {takeaway}
      </h2>
    </div>
  );
};

export default TakeawayCard;
