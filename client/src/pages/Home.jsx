import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loginCheck, setLoginCheck] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth")
      .then((res) => {
        if (res.data.Status === "Success") {
          setLoginCheck(true);
          setName(res.data.name);
          navigate("/home");
        } else {
          setLoginCheck(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loginCheck ? (
        <div>
          <h1>Kamu Masuk Sebagai --- {name}</h1>
          <button onClick={handleDelete}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>{message}</h1>
          <h1>Please login first</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
