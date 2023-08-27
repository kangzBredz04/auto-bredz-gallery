import express from "express";
import {
  logout,
  getDataLogin,
  login,
  register,
} from "../controller/auth-controller.js";
import { verifyUser } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/logout", logout);
router.get("/get-data-login", verifyUser, getDataLogin);
router.post("/login", login);
router.post("/register", register);

export default router;
