import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      {/* <div className="absolute top-28 left-4 p-3 w-1/3 h-1/3 text-white bg-gray rounded-md backdrop-blur-2xl">
        <p className="text-2xl">Selamat datang di MajesticCars!</p>
        <p className="font-primary text-lg italic mt-5">
          Temukan berbagai pilihan mobil impian Anda
        </p>
        <h1 className="font-primary italic">
          Hai, penggemar otomotif! Kami hadir untuk memberikan informasi terbaik
          seputar mobil
        </h1>
      </div>
      <img src="/first-page.jpg" alt="" className="h-screen w-full" /> */}
      <Outlet />
      {/* <footer>&copy; 2023 Auto Bredz Gallery</footer> */}
    </>
  );
}

export default App;
