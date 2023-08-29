import express from "express";
import {
  createFavorit,
  deleteFavorit,
  getFavorit,
} from "../controller/favorit-controller.js";

const router = express.Router();

// FAVORIT
router.post("/post-favorit-cars", createFavorit); // Menambahkan mobil kedalam favorit sesuai user
router.get("/get-favorit-cars", getFavorit); // Get semua data favorit
router.delete("/delete-favorit-cars/:id", deleteFavorit); // Dislike data mobil dari data favorit

export default router;
