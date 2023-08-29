import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";
import { api } from "../utils";

function CommentsList() {
  const [comments, setComments] = useState([]);
  const [editComment, setEditComment] = useState();

  useEffect(() => {
    api("/comment/get-comment-cars").then((comment) => {
      setComments(comment);
      console.log(comment);
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
                <tr
                  key={id + 1}
                  className="border-b hover:bg-gray-200 text-center"
                >
                  <td className="p-3">{id + 1}</td>
                  <td className="p-3">{com.id_user}</td>
                  <td className="p-3">{com.id_car}</td>
                  <td className="p-3">{com.comment}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <Button
                      variant="contained"
                      onClick={() => {
                        setEditComment({
                          id: com.id,
                          comment: com.comment,
                        });
                        console.log(editComment);
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
                        alert(message);
                        setEditComment(undefined);
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
      {editComment && (
        <form
          className="absolute bg-white bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col gap-4 p-8 rounded-3xl shadow-lg shadow-indigo-500/50 top-[5%] left-[35%]  min-w-[512px]"
          onSubmit={async (e) => {
            e.preventDefault();
            const message = await api(
              `/comment/update-comment/${editComment.id}`,
              "PUT",
              editComment
            );
            const comment = await api("/comment/get-comment-cars");
            setComments(comment);
            setEditComment(undefined);
            alert(message);
          }}
        >
          <h1 className="text-4xl">Edit Komentar</h1>
          <label className="flex flex-col gap-1">
            Isi Komentar
            <input
              type="text"
              value={editComment.comment}
              onChange={(e) => {
                e.preventDefault();
                setEditComment({ ...editComment, comment: e.target.value });
              }}
              className="p-0 h-9 px-4 text-sm rounded-lg w-full"
              autoFocus
            />
          </label>
          <div className="flex gap-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditComment(undefined);
              }}
              className="bg-red-600 px-4 py-1 rounded-md text-white"
            >
              Batal
            </button>
            <button
              onClick={() => alert("Komentar Berhasil Teredit")}
              className="bg-green-600 px-4 py-1 rounded-md text-white"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CommentsList;
