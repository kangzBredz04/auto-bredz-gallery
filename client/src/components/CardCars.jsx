function CardCars() {
  return (
    <div
      key={id}
      className="w-1/3 border-2 border-black bg-[#D8D9DA] p-4 flex flex-col gap-5 hover:cursor-pointer rounded-lg"
    >
      <div className="flex flex-col justify-between h-96 border-2 bg-white border-black  p-3 rounded-lg">
        <img src={car.image_link_2} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-2xl">
            {car.brand} {car.model}
          </h1>
          <div className="flex justify-evenly text-xl">
            <div onClick={() => setLike(!like)}>
              {like ? <MdFavorite /> : <MdFavoriteBorder />}
            </div>
            <MdOutlineInfo
              onClick={() => alert(`${car.id_cars} ${car.brand} ${car.model}`)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white h-1/3 overflow-y-scroll border-2 border-black p-3 rounded-lg">
        {comments.map((c) =>
          car.id_cars === c.car_id ? (
            <div className="flex flex-row gap-2">
              <div className="flex justify-between w-24">
                <p>{c.name}</p>
                <p>:</p>
              </div>
              <p>{c.comment}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <input
          type="text"
          name="comment"
          className="border-2 border-black rounded-lg p-1 w-5/6"
          onChange={(e) => {
            setNewComment({
              ...newComment,
              [e.target.name]: e.target.value,
              car_id: 3,
              user_id: 4,
            });
          }}
        />
        <MdSend
          className="text-4xl"
          onClick={async (e) => {
            const message = await api(
              "/cars/post-comment-cars",
              "POST",
              newComment
            );
            setNewComment({});
            alert(message);
            location.reload();
          }}
        />
      </div>
      {/* <div className="text-2xl">
      <h1 className="text-center text-4xl mb-3">Car Detail</h1>
      <p>Brand : {car.brand}</p>
      <p>Model : {car.model}</p>
      <p>Year : {car.year}</p>
      <p>Price : ${car.price}</p>
      <p>Transmission : {car.transmission}</p>
      <p>Fuel : {car.fuel}</p>
      <p>Machine : {car.machine}</p>
      <p>Seat : {car.seat}</p>
      <p>Warranty : {car.warranty}</p>
    </div> */}
    </div>
  );
}
export default CardCars;
