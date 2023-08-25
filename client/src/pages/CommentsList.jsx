import SideNav from "../components/SideNav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";

function CommentsList() {
  const comments = [
    {
      id: 1,
      userId: 2,
      carId: 3,
      comment: "Great car!",
    },
    {
      id: 2,
      userId: 1,
      carId: 1,
      comment: "Awesome model",
    },
    {
      id: 3,
      userId: 3,
      carId: 2,
      comment: "Love the design",
    },
    {
      id: 4,
      userId: 3,
      carId: 1,
      comment: "Powerful engine",
    },
    {
      id: 5,
      userId: 1,
      carId: 1,
      comment: "Awesome model",
    },
  ];
  return (
    <div className="flex gap-4">
      <div className="w-1/5">
        <SideNav />
      </div>
      <div className="w-full">
        <div className="bg-[#9BA4B5] p-10 shadow-xl rounded m-10 ">
          <h1 className="text-3xl font-semibold mb-4 ">Comments List</h1>
          <table className="p-10 my-4 font-content w-full">
            <thead>
              <tr className="bg-[#9BA4B5] border-b text-center ">
                <th className="p-2">No</th>
                <th className="p-2">User ID</th>
                <th className="p-2">Car ID</th>
                <th className="p-2">Commnet</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((com) => (
                <tr
                  key={com.id}
                  className="border-b hover:bg-gray-200 text-center"
                >
                  <td className="p-3">{com.id}</td>
                  <td className="p-3">{com.userId}</td>
                  <td className="p-3">{com.carId}</td>
                  <td className="p-3">{com.comment}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <Button variant="contained">Edit</Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CommentsList;
