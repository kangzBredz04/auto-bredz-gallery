import { client } from "../config/database.js";

export const createNewCar = async (req, res) => {
  try {
    await client.query(
      `INSERT INTO cars (brand, model, year, price, image) VALUES ('${req.body.brand}', '${req.body.model}', '${req.body.year}', '${req.body.price}', '${req.body.image}')`
    );
    res.status(200).json({ msg: "Data Mobil Baru Sudah Tersimpan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDataCars = async (_req, res) => {
  try {
    const datas = await client.query("SELECT * FROM cars");
    res.json(datas.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    await client.query(
      `UPDATE cars SET brand = '${req.body.brand}', model = '${req.body.model}', year = ${req.body.year}, price = ${req.body.price}, image = '${req.body.image}'  WHERE id =  ${req.params.id}`
    );
    res.status(200).json({ msg: "Data Mobil Sudah Terupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteCars = async (req, res) => {
  try {
    await client.query(`DELETE FROM cars WHERE id = ${req.params.id}`);
    res.status(200).json({ msg: "Data Mobil Sudah Terhapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
