import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  // Event saat enter atau menekan tombol regsiter
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", regist)
      .then(console.log(regist))
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required
          name="name"
          value={regist.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
          name="email"
          value={regist.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
          name="password"
          value={regist.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
