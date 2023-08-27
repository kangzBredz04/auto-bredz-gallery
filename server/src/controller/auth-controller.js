import bcrypt from "bcrypt";
import { client } from "../config/database.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt();
  console.log(salt);
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

  if (data.rowCount > 0) {
    console.log(await bcrypt.compare(req.body.password, data.rows[0].password));
    if (await bcrypt.compare(req.body.password, data.rows[0].password)) {
      const token = jwt.sign(data.rows[0], process.env.JWT_SECRET_KEY);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
      res.status(200);
      res.json({ Status: "Login Berhasil" });
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
  return await res.json({
    Status: "Berhasil",
    data: {
      name: req.name,
      email: req.email,
    },
  });
};

export const logout = async (_req, res) => {
  await res.setHeader("Cache-Control", "no-store");
  await res.clearCookie("token");
  res.send("Logout Berhasil");
};
