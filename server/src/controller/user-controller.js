import { client } from "../config/database.js";

export const createNewUser = async (req, res) => {
  try {
    await client.query(
      `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`
    );
    res.status(200).json({ msg: "Data User Sudah Tersimpan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDataUser = async (_req, res) => {
  try {
    const datas = await client.query("SELECT * FROM users");
    res.json(datas.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await client.query(`DELETE FROM users WHERE id = ${req.params.id}`);
    res.send("User Berhasil Dihapus");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
