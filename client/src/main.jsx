import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AdminPage from "./pages/AdminPage";
import CarsList from "./pages/CarsList";
import UsersList from "./pages/UsersList";
import CommentsList from "./pages/CommentsList";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/adminPage",
        element: <AdminPage />,
      },
      {
        path: "/carsList",
        element: <CarsList />,
      },
      {
        path: "/usersList",
        element: <UsersList />,
      },
      {
        path: "/commentsList",
        element: <CommentsList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
