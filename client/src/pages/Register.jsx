import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils";

function Register() {
  const [regist, setRegist] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Event saat mengetik pada textfield
  function handleChange(e) {
    setRegist({
      ...regist,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="py-24">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const message = await api("/auth/register", "POST", regist);
          setRegist({});
          // const planets = await api("/planets");
          // setRegist(planets);
          alert(message);
        }}
        className="p-2 border-2 bg-[#F1F6F9] border-black rounded-lg m-auto flex flex-col gap-5 w-72 shadow-2xl shadow-black h-96"
      >
        <h1 className="text-center text-2xl mt-3">Create your account</h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            required
            value={regist.email}
            onChange={handleChange}
            placeholder="Name*"
            className="w-full p-2 border-2 border-gray-400 rounded-md "
          />
          <input
            type="text"
            name="email"
            required
            value={regist.email}
            onChange={handleChange}
            placeholder="Email*"
            className="w-full p-2 border-2 border-gray-400 rounded-md "
          />
          <input
            type="text"
            name="password"
            required
            value={regist.password}
            onChange={handleChange}
            placeholder="Password*"
            className="w-full p-2 border-2 border-gray-400 rounded-md "
          />
          <button
            type="submit"
            className="bg-blue-500 text-white  rounded-md p-2"
          >
            Login
          </button>
          <h3 className="text-center">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500">
              Sign In
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Register;
