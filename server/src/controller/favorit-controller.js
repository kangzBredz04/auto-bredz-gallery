import { client } from "../config/database.js";

export const createFavorit = async (req, res) => {
  try {
    await client.query(
      `INSERT INTO favorit (id_car, id_user) VALUES ('${req.body.id_car}', '${req.body.id_user}')`
    );
    res.status(200).json({ msg: "Berhasil Menambahkan Ke Favorit" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getFavorit = async (_req, res) => {
  try {
    const datas = await client.query(
      "SELECT u.*, cr.*, f.* FROM favorit f JOIN users u ON f.id_user = u.id JOIN cars cr ON f.id_car = cr.id"
    );
    res.json(datas.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteFavorit = async (req, res) => {
  try {
    await client.query(`DELETE FROM favorit WHERE id = ${req.params.id}`);
    res.status(200).json({ msg: "Dislike" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
