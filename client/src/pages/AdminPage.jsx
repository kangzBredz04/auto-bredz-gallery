import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import CardList from "../components/CardList";
import { api } from "../utils";

function AdminPage() {
  const [cars, setCars] = useState([]);
  const [lengthCars, setLengthCars] = useState(cars.length);
  const [users, setUsers] = useState([]);
  const [lengthUsers, setLengthUsers] = useState(users.length);
  const [comments, setComments] = useState([]);
  const [lengthComments, setLengthComments] = useState(comments.length);

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

  useEffect(() => {
    api("/comment/get-comment-cars").then((comment) => {
      setComments(comment);
      setLengthComments(comment.length);
    });
  }, []);

  return (
    <div className="flex">
      <div className="w-1/6">
        <SideNav />
      </div>
      <div className="flex flex-col w-5/6">
        <div className="p-3">
          <h1 className="text-4xl text-center">Dashboard</h1>
        </div>
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
            length={lengthComments}
            image="/comment-list.png"
            title="COMMENTS"
            bgColor="bg-[#9DB2BF]"
            toLink="/commentsList"
          />
        </div>
        <div className="flex flex-row p-4" id="about">
          <div className="w-3/4 bg-[#212A3E] h-72 p-5 text-white rounded-xl flex flex-col gap-2">
            <h1 className="text-2xl">Welcome to ...</h1>
            <h1 className="text-5xl">MajesticCars</h1>
            <p className="text-sm font-primary">
              Cari tahu informasi mengenai spesifikasi exterior, interior,
              safety dan performance dari berbagai macam produk terbaru Toyota.
              Ditampilkan secara detail melalui pengalaman 360° exterior dan
              360° interior yang interaktif dan responsif sesuai dengan gadget
              Anda.
            </p>
            <p className="text-sm font-primary">
              Berkontribusi kepada bangsa dan masyarakat melalui praktik
              profesional di bidang pemasaran produk-produk dan jasa pelayanan
              kepada pelanggan yang berkualitas tinggi dalam lingkungan. Tumbuh
              berkembang bersama dengan karyawan, pemasok, dealer-dealer utama
              dan dealer-dealer dengan saling percaya dan menghormati.
            </p>
          </div>
          <div className="w-full">
            <img src="/about image.jpg" alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
