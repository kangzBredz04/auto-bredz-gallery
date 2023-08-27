import express from "express";
import { createNewUser, getDataUser } from "../controller/user-controller.js";

const router = express.Router();

router.post("/new-user", createNewUser); // Buat data user
router.get("/get-all-users", getDataUser); // Get semua data user
router.put("/update-user/:id"); // Update data user berdasarkan ID
router.delete("/delete-user/:id"); // Hapus data user berdasarkan ID

export default router;
