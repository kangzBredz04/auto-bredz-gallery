import express from "express";
import {
  createComment,
  getCommentCars,
  updateComment,
} from "../controller/comment-controller.js";

const router = express.Router();

// KOMEN
router.get("/get-comment-cars", getCommentCars); // Get semua komentar terhadap mobil
router.post("/post-comment-cars", createComment); // Membuat komentar terhadap mobil
router.put("/update-comment/:id", updateComment);

export default router;
