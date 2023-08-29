import { client } from "../config/database.js";

export const createComment = async (req, res) => {
  try {
    await client.query(
      `INSERT INTO comments (id_car, id_user, comment) VALUES ('${req.body.id_car}', '${req.body.id_user}', '${req.body.comment}')`
    );
    res.status(200).json({ msg: "Komentar Berhasil Terkirim" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCommentCars = async (_req, res) => {
  try {
    const datas = await client.query(
      "SELECT u.*, cr.*, c.* FROM comments c JOIN users u ON c.id_user = u.id JOIN cars cr ON c.id_car = cr.id"
    );
    res.json(datas.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    await client.query(
      `UPDATE comments SET comment = '${req.body.comment}' WHERE id =  ${req.params.id}`
    );
    res.status(200).json({ msg: "Data Komentar Sudah Terupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    await client.query(`DELETE FROM comments WHERE id = ${req.params.id}`);
    res.status(200).json({ msg: "Data Komentar Sudah Terhapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
