import express from "express";
import cors from "cors";
import pcRouters from "./Routes/pcs.js"

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", pcRouters)

app.listen(8800);
