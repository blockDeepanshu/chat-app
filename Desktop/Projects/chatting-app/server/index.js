import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectDB from "./db/connect.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

const start = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log("Server is running on PORT " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
