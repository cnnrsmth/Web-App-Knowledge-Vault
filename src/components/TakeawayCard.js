const TakeawayCard = ({ number, takeaway }) => {
  return (
    <div className="rounded-3xl shadow-lg p-6 mb-4 h-[160px] md:h-[200px] lg:h-[240px] bg-white flex flex-col justify-center">
      <h2 className="text-black text-m md:text-l lg:text-xl font-roboto font-bold text-center mt-4">
        {takeaway}
      </h2>
    </div>
  );
};

export default TakeawayCard;
