import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    axios
      .post("http://localhost:3000/auth/login", login)
      .then((res) => {
        // console.log(res);
        if (res.statusText === "OK") {
          alert(res.status);
          navigate("/home");
        } else {
          alert("asasa");
        }
      })
      .then((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
