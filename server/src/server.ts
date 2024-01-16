import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import todoRouter from "./routes/todo.routes";

const app = express();
dotenv.config();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/", todoRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
