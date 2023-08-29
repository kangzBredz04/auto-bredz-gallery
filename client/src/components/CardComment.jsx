function CardComment() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex justify-between w-24">
        <p>{c.name}</p>
        <p>:</p>
      </div>
      <p>{c.comment}</p>
    </div>
  );
}

export default CardComment;
