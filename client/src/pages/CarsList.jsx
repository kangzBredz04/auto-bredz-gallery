import SideNav from "../components/SideNav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { api } from "../utils";

function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api("/cars/get-cars").then((cars) => {
      setCars(cars);
    });
  }, []);

  const [editProduct, setEditProduct] = useState();

  return (
    <div className="flex">
      <div className="w-full">
        <SideNav />
      </div>
      <div className="w-full">
        <div className="bg-[#9BA4B5] p-10 shadow-xl rounded m-10 ">
          <h1 className="text-3xl font-semibold mb-4 ">Data Mobil Tersedia</h1>
          <Button
            variant="contained"
            color="success"
            className="w-1/5"
            onClick={() => setEditProduct({})}
          >
            Create
          </Button>
          <table className="p-10 my-4 font-content">
            <thead>
              <tr className="bg-[#9BA4B5] border-b text-center ">
                <th className="p-2">No</th>
                <th className="p-2">Brand</th>
                <th className="p-2">Model</th>
                <th className="p-2">Year</th>
                <th className="p-2">Price</th>
                <th className="p-2">Transmission</th>
                <th className="p-2">Fuel</th>
                <th className="p-2">Machine</th>
                <th className="p-2">Seat</th>
                <th className="p-2">Warranty</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, id) => (
                <tr
                  key={id + 1}
                  className="border-b hover:bg-gray-200 text-center"
                >
                  <td className="p-3">{id + 1}</td>
                  <td className="p-3">{car.brand}</td>
                  <td className="p-3">{car.model}</td>
                  <td className="p-3">{car.year}</td>
                  <td className="p-3">${car.price}</td>
                  <td className="p-3">{car.transmission}</td>
                  <td className="p-3">{car.fuel}</td>
                  <td className="p-3">{car.machine}</td>
                  <td className="p-3">{car.seat}</td>
                  <td className="p-3">{car.warranty}</td>
                  <td className="p-3 flex gap-2">
                    <Button
                      variant="contained"
                      onClick={() => setEditProduct(car)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        confirm(
                          `Apakah Anda yakin ingin menghapus mobil ${car.model}?`
                        );
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {editProduct && (
        <form className="absolute bg-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col gap-4 p-8 rounded-3xl shadow-lg shadow-indigo-500/50 top-[5%] left-[35%]  min-w-[512px]">
          <h1 className="text-4xl">{editProduct.id ? "Edit" : "Add"} Mobil</h1>
          <div className="flex gap-4">
            <label className="flex flex-col gap-1">
              Brand
              <input
                type="text"
                value={editProduct.brand}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, brand: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-56"
                autoFocus
              />
            </label>
            <label className="flex flex-col gap-1">
              Model
              <input
                type="text"
                value={editProduct.model}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, model: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-56"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="flex flex-col gap-1">
              Year
              <input
                type="number"
                value={editProduct.year}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, year: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
            <label className="flex flex-col gap-1">
              Price
              <input
                type="number"
                value={editProduct.price}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
            <label className="flex flex-col gap-1">
              Transmission
              <input
                type="text"
                value={editProduct.transmission}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    transmission: e.target.value,
                  })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label className="flex flex-col gap-1">
              Fuel
              <input
                type="text"
                value={editProduct.fuel}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, fuel: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
            <label className="flex flex-col gap-1">
              Machine
              <input
                type="text"
                value={editProduct.machine}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, machine: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-56"
              />
            </label>
            <label className="flex flex-col gap-1">
              Seat
              <input
                type="number"
                value={editProduct.seat}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, seat: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-16"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1">
            Warranty
            <input
              type="text"
              value={editProduct.warranty}
              onChange={(e) =>
                setEditProduct({ ...editProduct, warranty: e.target.value })
              }
              className="p-0 h-9 px-4 text-sm rounded-lg"
            />
          </label>
          <div className="flex gap-4">
            <label className="flex flex-col gap-1">
              Image 1
              <input
                type="text"
                value={editProduct.img1}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, img1: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
            <label className="flex flex-col gap-1">
              Image 2
              <input
                type="text"
                value={editProduct.img2}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, img2: e.target.value })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
            <label className="flex flex-col gap-1">
              Image 3
              <input
                type="text"
                value={editProduct.img3}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    img3: e.target.value,
                  })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => setEditProduct(undefined)}
              className="bg-red-600 px-4 py-1 rounded-md text-white"
            >
              Batal
            </button>
            <button
              onClick={() => alert("Data Berhasil Tersimpan")}
              className="bg-green-600 px-4 py-1 rounded-md text-white"
            >
              Simpan
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CarsList;
