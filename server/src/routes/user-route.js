import express from "express";
import {
  createNewUser,
  deleteUser,
  getDataUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/new-user", createNewUser); // Buat data user
router.get("/get-all-users", getDataUser); // Get semua data user
router.delete("/delete-user/:id", deleteUser); // Hapus data user berdasarkan ID

export default router;
