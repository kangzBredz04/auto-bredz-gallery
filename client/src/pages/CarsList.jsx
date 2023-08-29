import SideNav from "../components/SideNav";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { api } from "../utils";

function CarsList() {
  const [cars, setCars] = useState([]);

  const [editProduct, setEditProduct] = useState(undefined);

  useEffect(() => {
    api("/cars/get-cars").then((cars) => {
      setCars(cars);
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-1/5">
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
          <table className="p-10 my-4 font-content w-full">
            <thead>
              <tr className="bg-[#9BA4B5] border-b text-center ">
                <th className="p-2">No</th>
                <th className="p-2">Brand</th>
                <th className="p-2">Model</th>
                <th className="p-2">Year</th>
                <th className="p-2">Price</th>
                <th className="p-2">Image</th>
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
                  <td className="p-3">
                    {car.image.replace(car.image, "htttp://...")}
                  </td>
                  <td className="p-3 flex justify-around">
                    <Button
                      variant="contained"
                      onClick={() => {
                        setEditProduct(car);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={async () => {
                        const message = await api(
                          `/cars/delete-car/${car.id}`,
                          "DELETE"
                        );
                        const cars = await api("/cars/get-cars");
                        setCars(cars);
                        setEditProduct(undefined);
                        alert(message);
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
        <form
          className="absolute bg-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col gap-4 p-8 rounded-3xl shadow-lg shadow-indigo-500/50 top-[5%] left-[35%]  min-w-[512px]"
          onSubmit={async (e) => {
            e.preventDefault();
            if (editProduct.id) {
              // alert(`Masuk Edit ${editProduct.id_cars}`);
              const message = await api(
                `/cars/update-car/${editProduct.id}`,
                "PUT",
                editProduct
              );
              const cars = await api("/cars/get-cars");
              setCars(cars);
              setEditProduct(undefined);
              alert(message);
            } else {
              // alert("Masuk Tambah");
              const message = await api("/cars/new-car", "POST", editProduct);
              const cars = await api("/cars/get-cars");
              setCars(cars);
              setEditProduct(undefined);
              alert(message);
            }
          }}
        >
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
              Image
              <input
                type="text"
                value={editProduct.image}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    image: e.target.value,
                  })
                }
                className="p-0 h-9 px-4 text-sm rounded-lg w-36"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditProduct(undefined);
              }}
              className="bg-red-600 px-4 py-1 rounded-md text-white"
            >
              Batal
            </button>
            <button
              onClick={() => alert("Data Berhasil Tersimpan")}
              className="bg-green-600 px-4 py-1 rounded-md text-white"
              type="submit"
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
