import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Slider from "../components/SliderImage";
import { api } from "../utils";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineInsertComment,
  MdOutlineInfo,
  MdSend,
} from "react-icons/md";

function Home() {
  const images = [
    "/slider1.jpg",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg",
  ];

  const [cars, setCars] = useState([]);

  useEffect(() => {
    api("/cars/get-cars").then((car) => {
      setCars(car);
    });
  }, []);

  const [like, setLike] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    car_id: 0,
    user_id: 0,
    comment: "",
  });

  useEffect(() => {
    api("/cars/get-comment-cars").then((comment) => {
      setComments(comment);
    });
  }, []);
  console.log(comments);

  return (
    <div>
      <header className="sticky top-0 ">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <div>
          <Slider images={images} interval={2000} />
        </div>
        <About />
        <div className="flex flex-col p-4">
          <h1 className="text-5xl">PILIH MOBIL UNTUK ANDA!</h1>
          <div className="grid grid-cols-3 gap-3">
            {cars.map((car, id) => (
              <div
                key={id}
                className="w-full border-2 border-black bg-[#D8D9DA] p-4 flex flex-col gap-5 hover:cursor-pointer rounded-lg"
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
                        onClick={() =>
                          alert(`${car.id_cars} ${car.brand} ${car.model}`)
                        }
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
