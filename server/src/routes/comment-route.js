import express from "express";
import {
  createComment,
  deleteComment,
  getCommentCars,
  updateComment,
} from "../controller/comment-controller.js";

const router = express.Router();

// KOMEN
router.get("/get-comment-cars", getCommentCars); // Get semua komentar terhadap mobil
router.post("/post-comment-cars", createComment); // Membuat komentar terhadap mobil
router.put("/update-comment/:id", updateComment); // Update komentar berdasarkan id
router.delete("/delete-comment/:id", deleteComment); // Delete komentar

export default router;
