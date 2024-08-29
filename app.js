import Express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { config } from "dotenv";
config({
  path: "./config/config.env",
});

const app = Express();

// importing middlewares
app.use(Express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Testing api...");
});

// importing routes


export default app;
