import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoLogoModelS } from "react-icons/io";
import { MdFavorite, MdAccountCircle } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { api } from "../utils";
import { useEffect, useState } from "react";

function Navbar({ scrollRef }) {
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openFav, setOpenFav] = useState(false);
  const [dataFav, setDataFav] = useState([]);
  const [dataLogin, setDataLogin] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api("/favorit/get-favorit-cars").then((fav) => {
      setDataFav(fav);
    });
  }, []);
  console.log(dataFav);

  return (
    <nav
      className="flex md:flex-row flex-col items-center p-4 text-[#212A3E] bg-[#9BA4B5]"
      ref={scrollRef}
    >
      <div className="w-1/3">
        <h1 className="font-title text-3xl ml-16 font-extrabold">
          MajesticCars
        </h1>
      </div>
      {/* className="flex justify-evenly w-2/3" */}
      <div
        className={`md:flex md:justify-evenly md:w-2/3 md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full mt-4 md:mt-0 md:pl-0 pl-9 bg-[#9BA4B5]  transition-all duration-500 ease-in cursor-pointer ${
          open ? "top-12" : "top-[-490px]"
        }`}
      >
        <Link
          className="flex gap-2 items-center text-xl"
          to="about"
          smooth={true}
        >
          <BsInfoCircleFill />
          About
        </Link>
        <Link
          className="flex gap-2 items-center text-xl"
          to="models"
          smooth={true}
        >
          <IoLogoModelS />
          Models
        </Link>
        <Link
          className="flex gap-2 items-center text-xl"
          onClick={() => {
            setOpenFav(!openFav);
          }}
        >
          <MdFavorite />
          Favorit
        </Link>
        <div
          className={`absolute top-20 right-96 ${
            openFav ? "block" : "hidden"
          }  text-white bg-[#394867] w-48 rounded-xl px-4 py-2`}
        >
          <h1 className="text-3xl text-center">Data Favorit</h1>
          {dataFav.map((f, i) =>
            f.email === dataLogin.email ? (
              <tr className="border-2">
                <td>
                  {i + 1} {f.model}
                </td>
              </tr>
            ) : (
              ""
            )
          )}
        </div>
        <Link
          className="flex gap-2 items-center text-xl"
          onClick={() => {
            api("/auth/get-data-login").then((d) => {
              setDataLogin(d.data);
            });
            setOpenAccount(!openAccount);
          }}
        >
          <MdAccountCircle />
          Acoount
        </Link>
        <div
          className={`absolute top-20 right-56 ${
            openAccount ? "block" : "hidden"
          }  text-white bg-[#394867] w-48 rounded-xl px-4 py-2`}
        >
          <h1 className="text-3xl text-center">Akun</h1>
          <h1>Name : {dataLogin.name}</h1>
          <h1>Email : {dataLogin.email}</h1>
        </div>
        <Link
          className="flex gap-2 items-center text-xl bg-red-600 p-2 rounded-lg text-white w-1/6"
          onClick={() => {
            fetch("http://localhost:3000/auth/logout", {
              method: "GET",
              credentials: "include",
            }).then(async (res) => {
              if (res.ok) {
                alert(await res.text());
                navigate("/");
                location.reload();
              }
            });
          }}
        >
          <TbLogout />
          Logout
        </Link>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl  absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-[#212A3E]"
      >
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
