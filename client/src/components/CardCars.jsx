import { useEffect, useState } from "react";
import {
  MdOutlineBookmarkBorder,
  MdOutlineBookmark,
  MdOutlineInfo,
  MdSend,
} from "react-icons/md";
import { api } from "../utils";

function CardCars({ i, id, image, brand, model, year, price }) {
  const [like, setLike] = useState(false);

  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");

  const [dataComment, setDataComment] = useState({});

  const [allUser, setAllUser] = useState([]);
  const [dataLogin, setDataLogin] = useState({});
  const [idUser, setIdUser] = useState(0);

  useEffect(() => {
    api("/auth/get-data-login").then((d) => {
      setDataLogin(d.data);
    });
  }, []);
  console.log(dataLogin);

  useEffect(() => {
    api("/comment/get-comment-cars").then((comment) => {
      setComments(comment);
    });
  }, []);

  useEffect(() => {
    api("/user/get-all-users").then((u) => {
      setAllUser(u);
    });
  }, []);
  console.log(allUser);

  useEffect(() => {
    allUser.map((all, id) => {
      if (all.email === dataLogin.email) {
        setIdUser(id + 1);
      }
    });
  }, []);
  console.log(idUser);

  return (
    <div
      key={i}
      className="w-full border-2 border-black bg-[#D8D9DA] p-4 flex flex-col gap-5 hover:cursor-pointer rounded-lg"
    >
      <div className="flex flex-col justify-between h-96 border-2 bg-white border-black  p-3 rounded-lg">
        <img src={image} alt="" />
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-2xl">
            {brand} {model}
          </h1>
          <div className="flex justify-evenly text-xl">
            <div onClick={() => setLike(!like)}>
              {like ? (
                <MdOutlineBookmark color="blue" />
              ) : (
                <MdOutlineBookmarkBorder />
              )}
            </div>
            <MdOutlineInfo
              onClick={() =>
                alert(
                  `Car Detail\nBrand : ${brand}\nModel : ${model}\nYear : ${year}\nPrice : $${price}`
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white h-1/3 overflow-y-scroll border-2 border-black p-3 rounded-lg">
        {comments.map((c) =>
          id === c.id_car ? (
            <div className="flex flex-row gap-2">
              <div className="flex justify-between w-24">
                <p>{c.name}</p>
                <p>:</p>
              </div>
              <p>{c.comment}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <input
          type="text"
          name="comment"
          placeholder="Tambahkan komentar..."
          className="border-2 border-black rounded-lg p-1 w-5/6"
          onChange={(e) => {
            e.preventDefault();
            setNewComment(e.target.value);
          }}
        />
        <MdSend
          className="text-4xl"
          onClick={async () => {
            setDataComment({
              id_car: id,
              id_user: idUser,
              comment: newComment,
            });
            const message = await api(
              "/comment/post-comment-cars",
              "POST",
              dataComment
            );
            alert(`${id} ${idUser} ${newComment}`);
            setDataComment({});
            setNewComment("");
            alert(message);
            // location.reload();
          }}
        />
      </div>
    </div>
  );
}
export default CardCars;
