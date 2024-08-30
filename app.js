import Express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import { config } from "dotenv";
config({
  path: "./config/config.env",
});

// Importing Routes
import courseRoutes from "./routes/courseRoutes.js";

const app = Express();

// importing middlewares
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Testing api...");
});

// Using routes
app.use("/api/v1/course", courseRoutes);

export default app;
