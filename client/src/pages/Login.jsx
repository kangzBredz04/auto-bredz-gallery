import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
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
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(login),
      credentials: "include",
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert("OK");
        navigate("/home");
      } else {
        alert("Email atau Password Salah !!!");
      }
    });
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
            type="password"
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
