import express from "express";
import {
  createNewCar,
  getDataCars,
  updateCar,
  deleteCars,
  getCommentCars,
  createComment,
} from "../controller/car-controller.js";
// import { adminOnly } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/new-car", createNewCar); // Buat data mobil
router.get("/get-cars", getDataCars); // Get semua data mobil
router.put("/update-car/:id", updateCar); // Update data mobil berdasarkan id
router.delete("/delete-car/:id", deleteCars); // Delete data mpbil berdasarkan id

// KOMEN
router.get("/get-comment-cars", getCommentCars); // Get semua komen mobil
router.post("/post-comment-cars", createComment);

export default router;
