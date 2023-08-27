import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// export const ThemeContext = createContext({
//   theme: null,
//   setTheme: () => {},
//   language: null,
//   setLanguage: () => {},
// });

function Login() {
  const [dataLogin, setDataLogin] = useState({});
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Event saat mengetik pada textfield
  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();
  // Event saat enter atau menekan tombol regsiter
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", login)
      .then((res) => {
        if (res.statusText === "OK") {
          alert(res.statusText);
          navigate("/home");
        } else {
          alert("Error");
        }
      })
      .then((err) => console.log(err));
  }
  return (
    <div className="py-24">
      <form
        onSubmit={handleSubmit}
        className="p-2 border-2 bg-[#F1F6F9] border-black rounded-lg m-auto flex flex-col gap-5 w-72 shadow-2xl shadow-black h-80"
      >
        <h1 className="text-center text-2xl mt-3">Login to your account</h1>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="email"
            required
            value={login.email}
            onChange={handleChange}
            placeholder="Email*"
            className="w-full p-2 border-2 border-gray-400 rounded-md "
          />
          <input
            type="text"
            name="password"
            required
            value={login.password}
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
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Sign Up
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
