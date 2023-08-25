import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <header>
        <Link to="/home">
          <div>Auto Bredz Gallery</div>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </header> */}
      <Outlet />
      {/* <footer>&copy; 2023 Auto Bredz Gallery</footer> */}
    </>
  );
}

export default App;
