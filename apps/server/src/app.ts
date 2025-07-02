import express, { Response, type Express } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import ip from "ip";

const app: Express = express();

// ============= Middleware Layer =============

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes

app.get("/ping", (_req, res: Response) => {
  res.json({
    success: true,
    message: "Pong",
    ipAddress: ip.address(),
  });
});

import apiRoute from "./routes/api.route";

app.use("/api", apiRoute);

// 404 handler
// Global error handler

export default app;
