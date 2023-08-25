function CardList({ length, image }) {
  return (
    <div className="flex flex-row w-[256px] h-[128px] bg-[#61677A] rounded-md">
      <div className="">
        <h1>{length}</h1>
      </div>
    </div>
  );
}

export default CardList;
