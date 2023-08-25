import { client } from "../config/database.js";

export const createNewCar = async (req, res) => {
  try {
    await client.query(
      `INSERT INTO cars (brand, model, year, price, transmission, fuel,machine, seat, warranty, image_link_1, image_link_2, image_link_3) VALUES ('${req.body.brand}', '${req.body.model}', '${req.body.year}', '${req.body.price}', '${req.body.transmission}', '${req.body.fuel}', '${req.body.machine}', '${req.body.seat}', '${req.body.warranty}', '${req.body.image_link_1}', '${req.body.image_link_2}', '${req.body.image_link_3}')`
    );
    res.status(200).json({ msg: "Data Mobil Sudah Tersimpan" });
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
      `UPDATE cars SET brand = '${req.body.brand}', model = '${req.body.model}', year = ${req.body.year}, price = ${req.body.price}, transmission = '${req.body.transmission}', fuel = '${req.body.fuel}', machine = '${req.body.machine}', seat = ${req.body.seat}, warranty = '${req.body.warranty}', image_link_1 = '${req.body.image_link_1}', image_link_2 = '${req.body.image_link_2}', image_link_3 = '${req.body.image_link_3}'  WHERE id_cars =  ${req.params.id}`
    );
    res.status(200).json({ msg: "Data Mobil Sudah Terupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteCars = async (req, res) => {
  try {
    await client.query(`DELETE FROM cars WHERE id_cars = ${req.params.id}`);
    res.status(200).json({ msg: "Data Mobil Sudah Terhapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
