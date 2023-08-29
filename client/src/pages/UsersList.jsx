import SideNav from "../components/SideNav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { api } from "../utils";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api("/user/get-all-users").then((user) => {
      setUsers(user);
      console.log(users);
    });
  }, []);

  return (
    <div className="flex gap-4 ">
      <div className="w-1/5">
        <SideNav />
      </div>
      <div className="w-full">
        <div className="bg-[#9BA4B5] p-10 shadow-xl rounded m-10 ">
          <h1 className="text-3xl font-semibold mb-4 ">Data User</h1>
          <table className="p-10 my-4 w-full">
            <thead>
              <tr className="bg-[#9BA4B5] border-b text-center ">
                <th className="p-2">No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Password</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => (
                <tr
                  key={id + 1}
                  className="border-b hover:bg-gray-200 text-center"
                >
                  <td className="p-3">{id + 1}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {user.password.replace(user.password, "******")}
                  </td>
                  <td className="p-3">
                    {/* <Button variant="contained">Edit</Button> */}
                    <Button
                      variant="contained"
                      color="error"
                      onClick={async () => {
                        if (
                          confirm(
                            `Apakah Anda yakin ingin menghapus ${user.name}?`
                          )
                        ) {
                          const message = await api(
                            `/user/delete-user/${user.id}`,
                            "DELETE"
                          );
                          const users = await api("/user/get-all-users");
                          setUsers(users);
                          alert(message);
                        }
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
      </div>
    </div>
  );
}

export default UsersList;
