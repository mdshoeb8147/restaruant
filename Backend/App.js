import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./router/reservationRouter.js";
const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // replace * with specific domain if needed
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
