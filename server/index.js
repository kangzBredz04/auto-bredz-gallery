import dotenv from "dotenv";
import express, { json } from "express";
// import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoute from "./src/routes/auth-route.js";
import CarsRoute from "./src/routes/car-route.js";
import UserRoute from "./src/routes/user-route.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/auth", AuthRoute);
app.use("/cars", CarsRoute);
app.use("/user", UserRoute);

app.listen(process.env.API_PORT, () => console.log("Server up and running..."));
