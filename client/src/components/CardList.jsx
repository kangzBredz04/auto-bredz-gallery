function CardList({ length, image, title, bgColor, toLink }) {
  return (
    <div
      className={`flex flex-row justify-between w-[270px] h-[170px] ${bgColor} rounded-md p-5`}
    >
      <div className="flex flex-col justify-between">
        <h1 className="text-white text-xl">{title}</h1>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-8xl text-center">{length}</h1>
        <LearnMore toLink={toLink} />
      </div>
    </div>
  );
}

export default CardList;
