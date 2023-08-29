import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import CardList from "../components/CardList";
import { api } from "../utils";

function AdminPage() {
  const [cars, setCars] = useState([]);
  const [lengthCars, setLengthCars] = useState(cars.length);
  const [users, setUsers] = useState([]);
  const [lengthUsers, setLengthUsers] = useState(cars.length);

  useEffect(() => {
    api("/user/get-all-users").then((users) => {
      setUsers(users);
      setLengthUsers(users.length);
    });
  }, []);

  useEffect(() => {
    api("/cars/get-cars").then((cars) => {
      setCars(cars);
      setLengthCars(cars.length);
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div>
        <h1>Dashboard</h1>
        <div className="flex py-9 px-14 gap-10 flex-wrap">
          <CardList
            length={lengthUsers}
            image="/user-list.png"
            title="TOTAL USERS"
            bgColor="bg-[#526D82]"
            toLink="/usersList"
          />
          <CardList
            length={lengthCars}
            image="/car-list.png"
            title="TOTAL CARS"
            bgColor="bg-[#61677A]"
            toLink="/carsList"
          />

          <CardList
            length={lengthCars}
            image="/comment-list.png"
            title="COMMENTS"
            bgColor="bg-[#9DB2BF]"
            toLink="/commentsList"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
