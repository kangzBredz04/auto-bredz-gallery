import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import axios from "axios";
import CardList from "../components/CardList";

function AdminPage() {
  const [cars, setCars] = useState([]);
  const [lengthCars, setLengthCars] = useState(cars.length);

  useEffect(() => {
    async function getCars() {
      const response = await fetch("http://localhost:3000/cars/get-cars");
      const data = await response.json();
      setCars(data);
      setLengthCars(data.length);
    }
    getCars();
  }, []);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("http://localhost:3000/cars/get-cars");
      const data = await response.json();
      setCars(data);
      setLengthCars(data.length);
    }
    getUsers();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div>
        <h1>Dashboard</h1>
        <div className="flex py-9 px-14 gap-8">
          <CardList length={lengthCars} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
