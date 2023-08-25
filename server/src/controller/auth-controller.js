import bcrypt from "bcrypt";
import { client } from "../config/database.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.password, salt);
  await client.query(
    `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}')`
  );
  res.send("Register berhasil");
};

export const login = async (req, res) => {
  // Get data email dari database
  const data = await client.query(
    `SELECT * FROM users WHERE email = '${req.body.email}'`
  );
  console.log(data);

  if (data.rowCount > 0) {
    if (bcrypt.compare(req.body.password.toString(), data.rows[0].password)) {
      const token = jwt.sign(data.rows[0], process.env.JWT_SECRET_KEY);
      // console.log(token);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
      res.status(200);
      res.send("Login Berhasil");
    } else {
      res.status(401);
      res.send("Password Salah");
    }
  } else {
    res.status(401);
    res.send("Email Tidak Ditemukan");
  }
};

export const getDataLogin = async (req, res) => {
  return await res.json({ Status: "Success", name: req.name });
};

export const logout = async (req, res) => {
  await res.clearCookie("token");
  return res.json({ Status: "Success" });
};
