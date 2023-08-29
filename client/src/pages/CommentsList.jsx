import SideNav from "../components/SideNav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";
import { api } from "../utils";

function CommentsList() {
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState("");
  useEffect(() => {
    api("/comment/get-comment-cars").then((comment) => {
      setComments(comment);
    });
  }, []);

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
              {comments.map((com, id) => (
                <tr key={id} className="border-b hover:bg-gray-200 text-center">
                  <td className="p-3">{id + 1}</td>
                  <td className="p-3">{com.id_users}</td>
                  <td className="p-3">{com.id_car}</td>
                  <td className="p-3">{com.comment}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <Button
                      variant="contained"
                      onClick={() => {
                        setEditComment(com.comment);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={async () => {
                        const message = await api(
                          `/comment/delete-comment/${com.id}`,
                          "DELETE"
                        );
                        const comments = await api("/comment/get-comment-cars");
                        setComments(comments);
                        setEditComment("");
                        alert(message);
                      }}
                    >
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
