import React from "react";
import { AiFillHome, AiOutlineComment } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <nav className="bg-[#394867] text-white w-1/6 h-full fixed top-0 left-0 ">
      {/* <h1 className="text-3xl font-bold py-2 px-9 font-title">MajesticCars</h1> */}
      <img src="/Majestic Cars Admin.png" alt="" className="h-40 px-8" />
      <ul className="space-y-2 text-primary   ">
        <li className="hover:bg-[#212A3E] p-4 flex gap-6">
          <AiFillHome className="text-2xl" />
          <Link to="/adminPage" className="text-2xl">
            Dashboard
          </Link>
        </li>
        <li className="hover:bg-[#212A3E] p-4 flex gap-6">
          <FaUsers className="text-2xl" />
          <Link to="/usersList" className="text-2xl">
            Users
          </Link>
        </li>
        <li className="hover:bg-[#212A3E] p-4 flex gap-6">
          <IoCarSport className="text-2xl" />
          <Link to="/carsList" className="text-2xl">
            Cars
          </Link>
        </li>
        <li className="hover:bg-[#212A3E] p-4 flex gap-6">
          <AiOutlineComment className="text-2xl" />
          <Link to="/commentsList" className="text-2xl">
            Comments
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
