import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Slider from "../components/SliderImage";
import { api } from "../utils";
import CardCars from "../components/CardCars";
import Footer from "../components/Footer";

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

  console.log(cars);

  return (
    <>
      <header className="sticky top-0 ">
        <Navbar />
      </header>
      <main className="flex flex-col">
        <div>
          <Slider images={images} interval={2000} />
        </div>
        <About />
        <div className="flex flex-col p-4" id="models">
          <h1 className="text-5xl">PILIH MOBIL UNTUK ANDA!</h1>
          <div className="grid grid-cols-3 gap-3">
            {cars.map((car, i) => (
              <CardCars key={i} {...car} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
