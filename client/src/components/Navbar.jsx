import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoLogoModelS } from "react-icons/io";
import { MdFavorite, MdAccountCircle } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ scrollRef }) {
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
        <Link className="flex gap-2 items-center text-xl  ">
          <BsInfoCircleFill />
          About
        </Link>
        <Link className="flex gap-2 items-center text-xl">
          <IoLogoModelS />
          Models
        </Link>
        <Link className="flex gap-2 items-center text-xl">
          <MdFavorite />
          Favorit
        </Link>
        <Link className="flex gap-2 items-center text-xl">
          <MdAccountCircle />
          Acoount
        </Link>
        <Link className="flex gap-2 items-center text-xl bg-red-600 p-2 rounded-lg text-white w-1/6">
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
